import { chatColors } from "~/functions/colors";

export class Chat {
  static remove_named_messages(chatObject, name = "system") {
    return chatObject.filter(
      (message) => message.author.toLowerCase() !== name
    );
  }

  static groupBy(chatObject, key) {
    return chatObject.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  static getTotalNumberOfWords(chatObject) {
    return chatObject.reduce((n, { message }) => n + message.length, 0);
  }

  // Find hapax legomenons, a word or an expression that occurs only once within the context.
  static uniqueWords(chat_distribution) {
    function singleOccurrence(value) {
      return value[1] === 1;
    }
    return chat_distribution.filter(singleOccurrence);
  }

  static match_emojys(chat_distribution) {
    const regexpEmojiPresentation = /\p{Emoji_Presentation}/gu;
    function isEmoji(value) {
      return value[0].match(regexpEmojiPresentation);
    }

    return chat_distribution.filter(isEmoji);
  }

  static get_longest_message(chat_object) {
    return Math.max(
      ...chat_object.map((object) => object.message.split(" ").length)
    );
  }

  static toDayDates(chatObject) {
    return chatObject.map((message) => message.date.setHours(0, 0, 0, 0));
  }

  static getDaysBetween(start, end) {
    for (
      var a = [], d = new Date(start);
      d <= end;
      d.setDate(d.getDate() + 1)
    ) {
      a.push(new Date(d).toDateString());
    }
    return a;
  }

  static getMessagesPerPerson(chatObject) {
    return this.groupBy(chatObject, "author");
  }

  static getFunFacts(chatObject) {
    let numberOfWords = Chat.getTotalNumberOfWords(chatObject);
    let uniqueWords = Chat.getUniqueWords(chatObject);
    console.log(Object.keys(uniqueWords), numberOfWords);
    return {
      labels: ["UnFun Facts"],
      datasets: [
        {
          label: "Unique words used in this chat",
          backgroundColor: "rgba(255, 99, 132, 1)",
          borderColor: "rgba(255, 99, 132, 0.1)",
          data: [Object.keys(uniqueWords).length],
        },
        {
          label: "Total Number of Words you typed",
          backgroundColor: "rgba(75, 192, 192, 1)",
          data: [numberOfWords],
        },
        {
          // image of smiley
          label: "You are a cry baby, most used smiley",
          backgroundColor: "rgba(75, 192, 192, 1)",
          data: [100],
        },
      ],
    };
  }
  static hourlyDataFromChat(messages) {
    let hours = new Array(24).fill(0);
    messages.map((message) => {
      hours[message.date.getHours()] += 1;
    });
    return hours;
  }

  static dailyDataFromChat(messages) {
    let hours = new Array(7).fill(0);
    messages.map((message) => {
      hours[message.date.getDay()] += 1;
    });
    return hours;
  }

  constructor(chatObject = []) {
    // this one is the complete input
    this.chatObject = chatObject;
    // here we remove messages (i.e. system messages)
    this.filterdChatObject = Chat.remove_named_messages(chatObject);
    // frequencies for all words in chat (excluding system)
    this._sortedFreqList = null;
    // here we have the messages per person, also adding colors to them
    this._messagesPerPerson = null;

    // all dates of messages
    this._dates = null;
  }

  get sortedFreqDict() {
    if (this._sortedFreqList) return this._sortedFreqList;
    this._sortedFreqList = this._getSortedFreqDict();
    return this._sortedFreqList;
  }

  // creates a sorted FreqArray for the chat corpus [{word: 10},{hi:9},...]
  _getSortedFreqDict() {
    const message_string = this.chatObject.reduce(
      (n, { message }) => n + " " + message,
      " "
    );
    let message_array = message_string.replace(/\n/g, " ").split(" ");
    let distribution = {};
    message_array.map(function (item) {
      distribution[item] = (distribution[item] || 0) + 1;
    });
    let sorted_distribution = Object.entries(distribution).sort(
      (a, b) => b[1] - a[1]
    );
    return sorted_distribution;
  }

  get messagesPerPerson() {
    if (this._messagesPerPerson) return this._messagesPerPerson;
    this._messagesPerPerson = this._getMessagesPerPerson();
    return this._messagesPerPerson;
  }

  _getMessagesPerPerson() {
    let persons = Chat.getMessagesPerPerson(this.filterdChatObject);
    let enrichedPersons = [];
    Object.keys(persons).map((name, idx) => {
      enrichedPersons.push({
        name: name,
        color: chatColors[idx % chatColors.length],
        messages: persons[name],
      });
    });
    return enrichedPersons;
  }

  get dates() {
    if (this._dates) return this._dates;
    this._dates = this.chatObject.map((message) =>
      message.date.setHours(0, 0, 0, 0)
    );
    return this._dates;
  }

  getShareOfSpeech() {
    return {
      labels: this.messagesPerPerson.map((person) => person.name),
      datasets: [
        {
          label: "Share of Speech",
          backgroundColor: this.messagesPerPerson.map((person) => person.color),
          data: this.messagesPerPerson.map((person) => person.messages.length),
        },
      ],
    };
  }

  getFunFacts() {
    // number of words used in complete chat
    let numberOfWords = Chat.getTotalNumberOfWords(this.filterdChatObject);
    // words only used once in the complete chat ( hapax legomenons )
    let uniqueWords = Chat.uniqueWords(this.sortedFreqDict);
    // number of different words used in this chat
    let different_words = this.sortedFreqDict.length;
    // used emojis sorted
    let sorted_emojis = Chat.match_emojys(this.sortedFreqDict);
    // longest message in the chat
    let longest_message = Chat.get_longest_message(this.filterdChatObject);
    // average words used per message

    console.log(longest_message, different_words, sorted_emojis);

    return {
      labels: ["UnFun Facts"],
      datasets: [
        {
          label: "Unique words used in this chat",
          backgroundColor: "rgba(255, 99, 132, 1)",
          borderColor: "rgba(255, 99, 132, 0.1)",
          data: [Object.keys(uniqueWords).length],
        },
        {
          label: "Total Number of Words you typed",
          backgroundColor: "rgba(75, 192, 192, 1)",
          data: [numberOfWords],
        },
        {
          // image of smiley
          label: "Longest message in chat",
          backgroundColor: "rgba(75, 192, 192, 1)",
          data: [longest_message],
        },
      ],
    };
  }

  getHourlyData() {
    return {
      labels: [...Array(24).keys()],
      datasets: this.messagesPerPerson.map((person) => {
        return {
          label: person.name,
          backgroundColor: person.color,
          data: Chat.hourlyDataFromChat(person.messages),
        };
      }),
    };
  }

  getDailyData() {
    return {
      labels: [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag",
      ],
      datasets: this.messagesPerPerson.map((person) => {
        return {
          label: person.name,
          backgroundColor: person.color,
          data: Chat.dailyDataFromChat(person.messages),
        };
      }),
    };
  }

  getLineGraphData() {
    // calculate date ranges where messages happened
    var minDate = new Date(Math.min.apply(null, this.dates));
    var maxDate = new Date(Math.max.apply(null, this.dates));

    var x_axis = Chat.getDaysBetween(minDate, maxDate);

    // iterate over persons
    var datasets = this.messagesPerPerson.map((person) => {
      var hist_info = {};
      person.messages.forEach((message) => {
        var ds = message.date.toDateString();
        hist_info[ds] = (hist_info[ds] || 0) + 1;
      });

      return {
        label: person.name,
        backgroundColor: person.color,
        borderColor: person.color,
        data: Object.entries(hist_info).map((entry) => {
          return { x: entry[0], y: entry[1] };
        }),
      };
    });

    return {
      labels: x_axis,
      datasets: datasets,
    };
  }
}

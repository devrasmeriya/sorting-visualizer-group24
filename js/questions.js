// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "The worst case running times of Insertion sort, Merge sort and Quick sort, respectively, are:",
    answer: "Θ(n2), Θ(n log n) and Θ(n2)",
    options: [
      "Θ(n log n), Θ(n log n) and Θ(n2)",
      "Θ(n2), Θ(n2) and Θ(n Log n)",
      "Θ(n2), Θ(n log n) and Θ(n log n)",
      "Θ(n2), Θ(n log n) and Θ(n2)"
    ]
  },
    {
    numb: 2,
    question: "What is the average case complexity of bubble sort?",
    answer: "O(n2)",
    options: [
      " O(nlogn)",
      "O(logn)",
      "O(n)",
      "O(n2)"
    ]
  },
    {
    numb: 3,
    question: " Which of the following is not an advantage of optimised bubble sort over other sorting techniques in case of sorted elements?",
    answer: "Detects whether the input is already sorted",
    options: [
      " It is faster",
      "Consumes less memory",
      "Detects whether the input is already sorted",
      "Consumes less time"
    ]
  },
    {
    numb: 4,
    question: "What is the best case efficiency of bubble sort in the improvised version?",
    answer: "O(n)",
    options: [
      "O(nlogn)",
      "O(logn)",
      "O(n)",
      "O(n2)"
    ]
  },
    {
    numb: 5,
    question: "What is the worst case complexity of selection sort?",
    answer: "O(n2)",
    options: [
      "O(nlogn)",
      " O(logn)",
      "O(n)",
      "O(n2)"
    ]
  },
  {
    numb: 6,
    question :"Which of the following is not a stable sorting algorithm in its typical implementation",
    answer: "Quick Sort",
    options: [
      "Insertion Sort",
      "Merge Sort",
      "Quick Sort",
      "Bubble Sort",
    ]

  },
  {
    numb: 7,
    question :"What is the best time complexity of bubble sort?",
    answer: "N",
    options: [
      "N^2",
      "NlogN",
      "N",
      "N(logN)^2",
    ]

  },
  {
    numb: 8,
    question :"Selection sort algorithm design technique is an example of",
    answer: "Greedy method",
    options: [
      "Greedy method",
      "Divide-and-conquer",
      "Dynamic Programming",
      "Backtracking",
    ]

  },
  {
    numb: 9,
    question :"You have to sort 1 GB of data with only 100 MB of available main memory. Which sorting technique will be most appropriate?",
    answer: "Merge sort",
    options: [
      "Heap sort",
      "Merge sort",
      "Quick sort",
      "Insertion sort",
    ]

  },
  {
    numb: 10,
    question :"Which of the following sorting algorithms has the lowest worst-case complexity?",
    answer: "Merge sort",
    options: [
      "Bubble Sort",
      "Merge sort",
      "Quick sort",
      "Selection Sort",
    ]

  },
  {
    numb: 11,
    question :"Which of the following is true about merge sort?",
    answer: "All of the above",
    options: [
      "Merge Sort works better than quick sort if data is accessed from slow sequential memory.",
      "Merge Sort is stable sort by nature",
      "Merge sort outperforms heap sort in most of the practical situations.",
      "All of the above",
    ]

  },
  {
    numb: 12,
    question :"What is the advantage of selection sort over other sorting techniques?",
    answer: "It is faster than any other sorting technique",
    options: [
      "It requires no additional storage space",
      "It is scalable",
      " It works best for inputs which are already sorted",
      "It is faster than any other sorting technique",
    ]

  },
  {
    numb: 13,
    question :"What is the average case complexity of selection sort?",
    answer: "O(n2)",
    options: [
      "O(nlogn)",
      "O(logn)",
      "O(n)",
      "O(n2)",
    ]

  },
  {
    numb: 14,
    question :"What is the disadvantage of selection sort?",
    answer: "It is not scalable",
    options: [
      "It requires auxiliary memory",
      "It is not scalable",
      "It can be used for small keys",
      "It takes linear time to sort the elements",
    ]

  },
  {
    numb: 15,
    question :"What is an external sorting algorithm?",
    answer: "Algorithm that uses tape or disk during the sort",
    options: [
      "Algorithm that uses tape or disk during the sort",
      "Algorithm that uses main memory during the sort",
      "Algorithm that involves swapping",
      "Algorithm that are considered ‘in place’",
    ]

  },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
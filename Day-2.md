## What are Data Structures

The elementary particles of algorithms, data structures are woven into the very fabric of computer science and are essential building blocks of many a solution to coding interview problems.

## Arrays

![arrays](https://cdn-media-1.freecodecamp.org/images/1*plaTqL5DDa2MgqeK-0EClg.png)

Perhaps the most classic and most commonly used of all data structures

Arrays are a linear collection of data values that are accessible at numbered indices,starting at index 0

Arrays take advantage of this “grid” structure to store lists of related information in adjacent memory locations to guarantee extreme efficiency for finding those values. 🔳🔳🔳🔳

![array sample](https://cdn-media-1.freecodecamp.org/images/HjKZtf6JKxcrH8t51iRrId-4lTqjOlGtICip)

Their elements are next to each other in memory. If you need to access more than one of them, the process is extremely optimized because your computer already knows where the value is located.

The following are an array's standard operations and their corresponding time
complexities:

- Accessing a value at a given index: O(1)
- Updating a value at a given index: O(1)
- Inserting a value at the beginning:O(n)
- Inserting a value in the middle:O(n)
- Inserting a value at the end:
  - amortized O(1) when dealing with a dynamic array
  - O(n) when dealing with static array
- Removing a value at the beginning:O(n)
- Removing a value in the middle: O(n)
- Removing a value at the end: O(1)
- Copying the array:O(n)

A static array is an implementation of an array that allocates a fixed amount of memory to be used for storing the array's values. Appending values to the array therefore involves copying the entire array and allocating new memory for it, accounting for the extra space needed for the newly appended value.
This is a linear-time operation.

A dynamic array is an implementation of an array that preemptively allocates double the amount of memory needed to store the array's values. Appending values to the array is a constant-time operation until the allocated memory is filled up, at which point the array is copied and double the memory is once again allocated for it. This implementation leads to an amortized constant-time insertion-at-end operation.

## Linked Lists

![linked lists](https://cdn-media-2.freecodecamp.org/w1280/5f9c9a86740569d1a4ca2622.jpg)

## What is a linked list

A linked list is a linear data structure similar to an array. However, unlike arrays, elements are not stored in a particular memory location or index. Rather each element is a separate object that contains a pointer or a link to the next object in that list.

Each element (commonly called nodes) contains two items: the data stored and a link to the next node. The data can be any valid data type. You can see this illustrated in the diagram below.

![example linked list](https://res.cloudinary.com/dvj2hbywq/image/upload/v1590572188/Group_14_5_bvpwu0.png)

The entry point to a linked list is called the head. The head is a reference to the first node in the linked list. The last node on the list points to null. If a list is empty, the head is a null reference.

In JavaScript, a linked list looks like this:

```js
const list = {
    head: {
        value: 6
        next: {
            value: 10
            next: {
                value: 12
                next: {
                    value: 3
                    next: null
                    }
                }
            }
        }
    }
};

```

## Advantages of Linked lists

Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. This is one advantage it has over arrays.

## Disadvantages of Linked Lists

- Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed. Nodes are accessed sequentially starting from the first node.
- It uses more memory than arrays because of the storage of the pointers.

## Types of Linked lists

- **Singly Linked Lists:** Each node contains only one pointer to the next node. This is what we have been talking about so far.

The following are a singly linked list's standard operations and their corresponding time
complexities:

- Accessing the head: O(1)
- Accessing the tail: O(n)
- Accessing a middle node: O(n)
- Inserting/Removing the head: O(1)
- Inserting/Removing the tail: O(n) to access + O(1)
- Inserting/Removing a middle node: O(n) to access + O(1)
- Searching for a value: O(n)

- **Doubly Linked Lists:** Each node contains two pointers, a pointer to the next node and a pointer to the previous node.

The following are a doubly linked list's standard operations and their corresponding time
complexities:

- Accessing the head: O(1)
- Accessing the tail: O(1)
- Accessing a middle node: O(n)
- Inserting/Removing the head: O(1)
- Inserting/Removing the tail: O(1)
- Inserting/Removing a middle node: O(n) to access + O(1)
- Searching for a value: O(n)

- **Circular Linked Lists:** Circular linked lists are a variation of a linked list in which the last node points to the first node or any other node before it, thereby forming a loop.

- Visualize building a [linked list](https://visualgo.net/bn/list).

## Stacks

![stacks](https://cdn-media-1.freecodecamp.org/images/0*NEPg2w2qm-aTdb1a)

Stacks are an array-like data structure whose elements follow the **LIFO** rule: **L**ast **I**n, **F**irst **O**ut.

A stack is often compared to a stack of books on a table: the last book that's placed on the stack of books is the first one that's taken off the stack

JavaScript is a single threaded language. In the simplest terms, it means it can only do one thing at a time, just like us. So how does our language of choice handle this in an organized way, Stacks?

![stacks example](https://cdn-media-1.freecodecamp.org/images/K4D9kYqy74hwfMaEvoj6TMVAioUxmyUY5vfG)

As you can see, the stack is a clean way of handling tasks, removing them, and eventually getting back to the beginning.

Stacks come with a cost: memory. For every item we place on the stack, we allocate a stack frame to it. Think of an array index. Each index is allocated space to hold something. If we keep adding and adding to a stack, we hold the possibility of running out of space, like a parking lot that is full. When that happens, we have an overflow, hence, the term “stack overflow”. This can lead to crashes and stuck processes.

![stack overflow image](https://cdn-media-1.freecodecamp.org/images/2oeYQbArqT5t5TfIjqkI5i86QjaFUynSqyY5)

The following are stacks standard operations and their corresponding time
complexities:

- Pushing an element onto the stack: O(1)
- Popping an element off the stack: O(1)
- Peeking at the element on the top of the stack: O(1)
- Searching for an element in the stack: O(n)

A stack is typically implemented with a **dynamic array** or with a **singly linked list**

## Applications for a stack data structure

- Using the back and forward buttons in your browser
- Undo/redo
- Call stack
- Expression evaluation
- Backtracking (game playing, finding paths, exhaustive searching)
- Memory management, run-time environment for nested language features.

## Queue

![the queue](https://www.javascripttutorial.net/wp-content/uploads/2019/12/queue-at-a-bank.png)

Queues are an array-like data structure whose elements follow the **FIFO** rule: **F**irst **I**n, **F**irst **O**ut.

A queue is often compared to a group of people standing in line to purchase items at a store: the first person to get in line is the first one to purchase items and get out of the queue

The main reason is queues process data fairly and preserve the order of the collection. This also happens when we iterate over items with a for or while loop, forEach(), or map() method. Each item in the array gets processed in the order it was inserted, from index 0 to index.length — 1.

**In Queues, items are processed in the order they are inserted.**

When an item is inserted into a queue, it’s called **enqueued**. When an item is removed, it is **dequeued**. Other methods include peek, contains, until, and count.

The following are queue's standard operations and their corresponding time
complexities:

- Enqueuing an element into he queue: O(1)
- Dequeuing an element out of the queue: O(1)
- Peeking at the element at the front of the queue: O(1)
- Searching for an element in the queue: O(n)

A queue is typically implemented with a **doubly linked list**

The following picture illustrates a queue

![queue picture](https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Queue-Illustration.png)

## Graphs

![graphs](https://cdn-media-1.freecodecamp.org/images/1*EBtSVCSmRvw40Bmu9vP69A.png)

Graphs are used in diverse industries and fields:

- **GPS systems** and Google Maps use graphs to find the shortest path from one destination to another.
- **Social Networks** use graphs to represent connections between users.
- **The Google Search** algorithm uses graphs to determine the relevance of search results.
- **Operations Research** is a field that uses graphs to find the optimal path to reduce the cost of transportation and delivery of goods and services.
- **Even Chemistry** uses graphs to represent molecules!!! ❤️

Graphs are used to represent, find, analyze, and optimize connections between elements (houses, airports, locations, users, articles, etc.).

Here is what a graph looks like

![graph image](https://cdn-media-1.freecodecamp.org/images/vQ77VuGVlTR95GgMxzyKqydIqoRJcPcWrigy)

Circles represent Nodes and the lines represent Edges

![detailed graph](https://cdn-media-1.freecodecamp.org/images/9KFiyFYi9bMktsJkMKLKaeJl31heUN9A-xrr)

- **Nodes** they are the elements that create the network. They could represent houses, locations, airports, ports, bus stops, buildings, users, basically anything that you could represent as being connected to other similar elements in a network.
- **Edges** are connections between the nodes. They could represent streets, flights, bus routes, a connection between two users in a social network, or anything that could possibly represent a connection between the nodes in the context that you are working with.
- **Graph Cycle** a cycle occurs in a graph when three or more vertices in the graph are connected so as form a closed loop
- **Acyclic Graph** A graph that has no cycles
- **Directed graph** A graph whose edges are directed, meaning that they can only be traversed in one direction, which is specified

**_Example_**

if we create a graph for a pizza delivery service, representing a city, two houses (nodes) may be connected by a one-way street (edge). You could get from house A to house B through this street, but you couldn’t go back, so you would have to take an alternative path.

![directed graph example](https://cdn-media-1.freecodecamp.org/images/U7ZcYL5X54m06sKCuQ3wv8K2-Ka7ixE67nxg)

- **Undirected Graph** A graph whose edges undirected, meaning they can be traversed in both directions

**_Example_**

For our pizza delivery service, this would mean that the delivery motorcycle can go from the source to the destination through the same street or path (To their relief! 😇).

![Undirected graph example](https://cdn-media-1.freecodecamp.org/images/ijCoLsVRLPWxVTmUI13tnv-aTOtyiHHonk11)

- **Connected graph** A graph is connected if for every pair of vertices iin the graph there's a path of one or more edges connecting the given vertices

## Hash tables

![hash tables](https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/JavaScript-Hash-Table.png)

Fun. Fast. Flexible. This beloved data structure is a fan favorite among interviewers and interviewees alike, and for good reason: it lends itself extremely well to any problem requiring some sort of lookup operation, of which (spoiler alert) there are many.

A hash table, also known as a hash map, is a data structure that maps keys to values. It is one part of a technique called hashing, the other of which is a hash function. A hash function is an algorithm that produces an index of where a value can be found or stored in the hash table.

Some important notes about hash tables:

1. Values are not stored in a sorted order.

2. You must account for potential collisions. This is usually done with a technique called chaining. Chaining means to create a linked list of values, the keys of which map to a certain index.

You'll commonly use a Hash Table because of its fast search, insertion, and delete operations:

**HASH TABLE TIME COMPLEXITY IN BIG O NOTATION**

| Algorithm | Average | Worst case |
| :-------- | :-----: | ---------: |
| Space     |  O(n)   |       O(n) |
| Search    |  O(1)   |       O(n) |
| Insert    |  O(1)   |       O(n) |
| Delete    |  O(1)   |       O(n) |

# Trees

![Binary](https://cdn-media-1.freecodecamp.org/images/2rTqYlcrnWtICedt131tDft0CmkzZaViExJX)

A BST is considered a data structure made up of nodes, like Linked Lists. These nodes are either null or have references (links) to other nodes. These ‘other’ nodes are child nodes, called a left node and right node. Nodes have values. These values determine where they are placed within the BST.

Similarly to a linked list, each node is referenced by only one other node, its parent (except for the root node). So we can say that each node in a BST is in itself a BST. Because further down the tree, we reach another node and that node has a left and a right. Then depending on which way we go, that node has a left and a right and so on.

1. The left node is always smaller than its parent.

2. The right node is always greater than its parent.

3. A BST is considered balanced if every level of the tree is fully filled with the exception of the last level. On the last level, the tree is filled left to right.

4. A Perfect BST is one in which it is both full and complete (all child nodes are on the same level and each node has a left and a right child node).

## Why use BST

What are some real-world examples of BST’s? Trees are often used in search, game logic, autocomplete tasks, and graphics.

Speed. As mentioned earlier, the BST is an ordered data structure. Upon insertion, the nodes are placed in an orderly fashion. This inherent order makes searching fast. Similar to binary search (with an array that is sorted), we cut the amount of data to sort through by half on each pass. For example, suppose we are looking for a small node value. On each pass, we keep moving along the leftmost node. This eliminates half the greater values automatically!

Also, unlike an array, the data is stored by reference. As we add to the data structure, we create a new chunk in memory and link to it. This is faster than creating a new array with more space and then inserting the data from the smaller array to the new, larger one.

In short, inserting, deleting and searching are the all-stars for a BST

Now that we understand the principles, the benefits, and the basic components of a BST, let’s implement one in javascript.

There are many types of trees and tree-like structures, including binary trees, heaps, and tries

**_Binary Tree_**
A tree whose nodes have up to two child nodes

The structure of a binary tree is such that many of its operations have a logarithmic time complexity, making the binary tree an incredibly attractive and commonly used data structure.

**_K-ary Tree_**

A tree whose nodes have up to K child-nodes. A binary tree is a k-ary tree where k === 2

**_Perfect Binary tree_**

A Binary tree whose interior nodes all have two child-nodes and whose leaf nodes all have the same depth

```
          1
      /         \
     2           3
   /   \       /   \
  4     5     6     7
 / \   / \   / \   / \
8   9 10 11 12 13 14 15
```

## What is Big O

The speed and memory usage of an algorithm aren't necessarily fixed; they might change depending on the input. So how do we express the performance of an algorithm then?

Enter Big O Notation, a powerful tool that allows us to generalize the space-time complexity of an algorithm as a function of its input size.

## Why is Big O important

Understanding the Big O of algorithms will

- get you into the mindset of coding for efficiency. Ex: "I have to change this algorithm because it's O(n!)!"
- help you talk code to other developers. Ex: "Don't worry, I changed up the algorithm so it not O(n^2). It's O(n) now."
- help you for interviews. You will be able to talk about efficiency of algorithms that you whiteboard. Ex: "What I just coded out is O(n^2)."

## Let's dive into 0(1)

To say an algorithm takes constant (or O(1)) time means: no matter how big the input(s) are, the computer will do basically same amount of work to perform the algorithm on them.

```js
function getMiddleOfArray(array) {
  return array[Math.floor(array.length / 2)];
}
```

## Let's dive into 0(n)

To say an algorithm is linear or O(n) means the resources required grow proportionally to the size of the input.

Algorithms that process each input at least once will take at least O(n) time. Loops are a common example.

```js
function find(needle, haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) return true;
  }
}

function crossAdd(input) {
  var answer = [];
  for (var i = 0; i < input.length; i++) {
    var goingUp = input[i];
    var goingDown = input[input.length - 1 - i];
    answer.push(goingUp + goingDown);
  }
  return answer;
}
```

## Lets Dive into O(n²)

```js
function allCombos(list) {
  var results = [];
  for (var i = 0; i < results.length; i++) {
    for (var j = 0; j < results.length; j++) {
      results.push([i, j]);
    }
  }
}
```

This would be O(n²). For every input, we have to go through a full loop inside of another full loop, meaning we're doing a lot of work! This is the trick: look for loops. A loop inside of a loop inside of a loop would likewise be O(n³).

For some people, it's helpful to use a graph to visualize what we're talking about here

![visual representation](https://btholt.github.io/complete-intro-to-computer-science/static/e331672c4244a2ae881a5123175c2c59/5a190/graph.png)

Here we see a graph that represents the more items we put in a array, how long does it take for the function to complete. The red graph represents O(1) like our getMiddleOfArary function. You can throw an array of 1,000,000 at it and it still takes the same amount of time as if the array was 10 big.

The blue line represents a function that takes longer based on how many items are in the array similar to crossAdd or find and it grows a steady rate. If it takes 10ms to run a function with a 100 items in it, we could reasonably expect it would take 10 times longer-ish (remember, these are broad strokes, not precise figures) if we had 10 times the amount of things in the array.

The green line is where we get start getting scary. For every item we add to the array, it takes exponentially more time to complete the operation. Adding 10x the items could cause a function to takes 100x longer since it's O(n²). It gets even scarier at O(n³) as it would take 1000x longer.

## Spatial Complexity

Let's talk about spatial complexity or how much space (e.g. how much RAM or disk space) an algorithm needs to complete.

**_Linear_**

Let's say we have an algorithm that for every item in the array, it needs to create another array in the process of sorting it. So for an array of length 10, our algorithm will create 10 arrays. For an array of 100, it'd create 100 extra arrays (or something close, remember these are broad strokes, not exact.) This would be O(n) in terms of its spatial complexity.

**_Logrithmic_**

What about another for every item in the array, it needed to create a diminishing amount of extra arrays. For example: for an array of length 10, it'd create 7 arrays. For an array of 100, it'd create 12 arrays. For an array of 1000, it'd created 20 arrays. This would be O(log n).

**_Constant_**

What if we didn't create any extra arrays when we did our algorithm? We just used the same space we were given when we first started. Or if we created just 10 arrays, no matter how long the array is? This would be O(1) since it's constant no matter what. Its spatial need don't increase with longer arrays.

**_Quadratic_**

Lastly, what if we had an app that calculates the distances between zip / postal codes?

A zip code in the United States is a five digit number that represents a fairly small area of land. 98109 is in the middle of Seattle, Washington while 10001 is in the middle of New York City, NY.

If a user asks what's the distance between 98109 and 10001, we'd spit out something like 2,800 miles or 4,500 km. Now, let's say for every zip code we add to our system, we calculate the distance between every other zip code in our system and store it. If there were only 10 zip codes, sure, that'd be easy, but there are nearly 42,000 zip codes in the United States with more being added. The spatial complexity on this would be O(n²) because for every new zip code we add, we'd have to add 42,000 new items as well.

# Algorithms

Here is the list of data structures and algorithms you should prepare for coding interviews and their corresponding study guides:

| Topic                 | Priority |
| :-------------------- | :------: |
| Array                 |   High   |
| String                |   High   |
| Hash Table            |   Mid    |
| Recursion             |   Mid    |
| Sorting and searching |   High   |
| Matrix                |   High   |
| Tree                  |   High   |
| Queue                 |   Mid    |
| stack                 |   Mid    |
| graph                 |   high   |
| Recursion             |   Mid    |

## Arrays

**_Common terms_**

Common terms you see when doing problems involving arrays:

- Subarray - A range of contiguous values within an array.
  - Example: given an array [2, 3, 6, 1, 5, 4], [3, 6, 1] is a subarray while [3, 1, 5] is not a subarray.
- Subsequence - A sequence that can be derived from the given sequence by deleting some or no elements without changing the order of the remaining elements.

  - Example: given an array [2, 3, 6, 1, 5, 4], [3, 1, 5] is a subsequence but [3, 5, 1] is not a subsequence.

  **_Time Complexity_**

  | Operation             |   Big-O   |                                                                                                 Note |
  | :-------------------- | :-------: | ---------------------------------------------------------------------------------------------------: |
  | Access                |   O(1)    |                                                                                                      |
  | Search                |   O(n)    |                                                                                                      |
  | Search (sorted array) | O(log(n)) |                                                                                                      |
  | Insert                |   O(n)    | Insertion would require shifting all the subsequent elements to the right by one and that takes O(n) |
  | Insert (at the end)   |   O(1)    |                                 Special case of insertion where no other element needs to be shifted |
  | Delete                |   O(n)    |    Removal would require shifting all the subsequent elements to the left by one and that takes O(n) |
  | Remove (at the end)   |   O(1)    |                                   Special case of removal where no other element needs to be shifted |

## Things to look out for during interviews

- Clarify if there are duplicate values in the array. Would the presence of duplicate values affect the answer? Does it make the question simpler or harder?
- When using an index to iterate through array elements, be careful not to go out of bounds.
- Be mindful about slicing or concatenating arrays in your code. Typically, slicing and concatenating arrays would take O(n) time. Use start and end indices to demarcate a subarray/range where possible.

## Techniques

Note that because both arrays and strings are sequences (a string is an array of characters), most of the techniques here will apply to string problems.

**_Sliding window_**

Master the sliding window technique that applies to many subarray/substring problems. In a sliding window, the two pointers usually move in the same direction will never overtake each other. This ensures that each value is only visited at most twice and the time complexity is still O(n). Examples: Longest Substring Without Repeating Characters, Minimum Size Subarray Sum, Minimum Window Substring

**_Two pointers_**

Two pointers is a more general version of sliding window where the pointers can cross each other and can be on different arrays. Examples: Sort Colors, Palindromic Substrings

When you are given two arrays to process, it is common to have one index per array (pointer) to traverse/compare the both of them, incrementing one of the pointers when relevant. For example, we use this approach to merge two sorted arrays. Examples: Merge Sorted Array

**_Sorting the array_**

Is the array sorted or partially sorted? If it is, some form of binary search should be possible. This also usually means that the interviewer is looking for a solution that is faster than O(n).

Can you sort the array? Sometimes sorting the array first may significantly simplify the problem. Obviously this would not work if the order of array elements need to be preserved. Examples: Merge Intervals, Non-overlapping Intervals

## Essential questions

These are essential questions to practice if you're studying for this topic.

- [Two Sum](https://leetcode.com/problems/contains-duplicate/)
- [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
- [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)

## Strings

A string is a sequence of characters

**_Time Complexity_**

A strings is an array of characters, so the time complexities of basic string operations will closely resemble that of array operations.

| Operation | Big-O |
| :-------- | :---: |
| Access    | O(1)  |
| Search    | O(n)  |
| Insert    | O(n)  |
| Remove    | O(n)  |

## Things to look out for during interviews

Ask about input character set and case sensitivity. Usually the characters are limited to lowercase Latin characters, for example a to z.

## Techniques

**_Anagram_**

An anagram is word switch or word play. It is the result of rearranging the letters of a word or phrase to produce a new word or phrase, while using all the original letters only once. In interviews, usually we are only bothered with words without spaces in them.

To determine if two strings are anagrams, there are a few approaches:

Sorting both strings should produce the same resulting string. This takes O(n.log(n)) time and O(log(n)) space.
If we map each character to a prime number and we multiply each mapped number together, anagrams should have the same multiple (prime factor decomposition). This takes O(n) time and O(1) space. Examples: Group Anagram
Frequency counting of characters will help to determine if two strings are anagrams. This also takes O(n) time and O(1) space.
Palindrome
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as madam or racecar.

Here are ways to determine if a string is a palindrome:

Reverse the string and it should be equal to itself.
Have two pointers at the start and end of the string. Move the pointers inward till they meet. At every point in time, the characters at both pointers should match.
The order of characters within the string matters, so hash tables are usually not helpful.

When a question is about counting the number of palindromes, a common trick is to have two pointers that move outward, away from the middle. Note that palindromes can be even or odd length. For each middle pivot position, you need to check it twice - once that includes the character and once without the character. This technique is used in **_Longest Palindromic Substring_**.

- For substrings, you can terminate early once there is no match

## Essential questions

These are essential questions to practice if you're studying for this topic.

- [Valid Anagram](https://leetcode.com/problems/valid-anagram)
- [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
- [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

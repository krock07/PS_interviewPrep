# Algorithms continued

## Hash Tables

Hashing is the most common example of a space-time tradeoff. Instead of linearly searching an array every time to determine if an element is present, which takes O(n) time, we can traverse the array once and hash all the elements into a hash table. Determining if the element is present is a simple matter of hashing the element and seeing if it exists in the hash table, which is O(1) on average.

In the case of hash collisions, there are a number of collision resolution techniques that can be used. You will unlikely be asked about details of collision resolution techniques in interviews:

- **_Separate chaining_** - A linked list is used for each value, so that it stores all the collided items.
- **_Open addressing_** - All entry records are stored in the bucket array itself. When a new entry has to be inserted, the buckets are examined, starting with the hashed-to slot and proceeding in some probe sequence, until an unoccupied slot is found.

  **_Time Complexity_**

  | Operation | Big-O  |                                                 Note |
  | :-------- | :----: | ---------------------------------------------------: |
  | Access    |  N/A   | Accessing not possible as the hash code is not known |
  | Search    | O(1)\* |                                                      |
  | Insert    | O(1)\* |                                                      |
  | Remove    | O(1)\* |                                                      |

  - This is the average case, but in interviews we only care about the average case for hash tables.

## Sample Questions

- Describe an implementation of a least-used cache, and big-O notation of it.
- A question involving an API's integration with hash map where the buckets of hash map are made up of linked lists.

## Essential questions

These are essential questions to practice if you're studying for this topic.

- [Two Sum](https://leetcode.com/problems/two-sum)
- [Ransom Note](https://leetcode.com/problems/ransom-note)

## Sorting and searching cheatsheet

### Introduction

Sorting is the act of rearranging elements in a sequence in order, either in numerical or lexicographical order, and either ascending or descending.

A number of basic algorithms run in O(n2) and should not be used in interviews. In algorithm interviews, you're unlikely to need to implement any of the sorting algorithms from scratch. Instead you would need to sort the input using your language's default sorting function so that you can use binary searches on them.

On a sorted array of elements, by leveraging on its sorted property, searching can be done on them in faster than O(n) time by using a binary search. Binary search compares the target value with the middle element of the array, which informs the algorithm whether the target value lies in the left half or the right half, and this comparison proceeds on the remaining half until the target is found or the remaining half is empty.

## Things to look out for during interviews

Make sure you know the time and space complexity of the language's default sorting algorithm! The time complexity is almost definitely O(nlog(n))). Bonus points if you can name the sort. In Python, it's Timesort. In Java, an implementation of Timesort is used for sorting objects, and Dual-Pivot Quicksort is used for sorting primitives.
b

## Techniques

**_Sorted inputs_**

When a given sequence is in a sorted order (be it ascending or descending), using binary search should be one of the first things that come to your mind.

**_Sorting an input that has limited range_**

Counting sort is a non-comparison-based sort you can use on numbers where you know the range of values beforehand. Examples: [H-Index](https://leetcode.com/problems/h-index/)

## BST Implementation

Binary Search tree is a binary tree in which nodes that have lesser value are stored on the left while the nodes with a higher value are stored at the right.

1. The Node Class
   This class will represent a single node present at various points in the BST. A BST is nothing but a collection of nodes storing data and child references placed according to the rules described above.

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
```

To create a new Node instance, we can call this class like this with some data −

```js
const newNode = new Node(23);
```

2. The Binary Search Tree Class

```js
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
```

This will create the Binary Search Tree class which we can call with the new keyword to make a tree instance.

Now as we are done with the basic stuff let’s move on to inserting a new node at the right place (according to the rules of BST described in definition).

3. Inserting a Node in BST

```js
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
```

**_Final code_**

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
const BST = new BinarySearchTree();
BST.insert(1);
BST.insert(3);
BST.insert(2);
```

Now, lets break down each part of this class in more detail

**_The constructor_**

The BinarySearchTree class itself mostly just acts as a housing for the head node. We need to keep a reference to our head because every other node in our tree originates from that node. So if we want to insert a new node into the tree, we have to start from the head because it dictates where all other nodes are placed. I’ve also opted to provide this value with a default assignment of an empty Node instance. That way I can rely on there being a head node present and not have to code defensively around that.

**_The insert() method_**

The insert method is a critical method for any binary search tree because of the strict ordering each node has to adhere to. Remember, the left node must have a value less than its parent, and the right node’s value must be greater than that of its parent.

As for the algorithm, it’s quite simple. We traverse through the tree using a while loop that runs until we are out of nodes to check. On each iteration, we compare the value to be inserted to the value of the current node we’re on. That tells us which side to continue traversing, the left or the right. Then, if there’s no child node on that side (i.e. left or right are null), we’ll insert a new node with our new value.

Otherwise, if there is a child node there, we’ll set that to be our new current node and the loop continues.

## Essential questions

These are essential questions to practice if you're studying for this topic.

- [Binary Search](https://leetcode.com/problems/binary-search/)
- [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

## Recommended practice questions

These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
- [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
- [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

# Matrix cheatsheet

### Introduction

A matrix is a 2-dimensional array. Questions involving matrices are usually related to dynamic programming or graph traversal.

Matrices can be used to represent graphs where each node is a cell on the matrix which has 4 neighbors (except those cells on the edge and corners). This page will focus on questions which don't use matrix as graphs. Questions which are meant to use the matrix as a graph can be found on the graph section.

## Techniques

### Creating an empty N x M matrix

For questions involving traversal or dynamic programming, you almost always want to make a copy of the matrix with the same size/dimensions that is initialized to empty values to store the visited state or dynamic programming table. Be familiar with such a routine in your language of choice:

### Transposing a matrix

The transpose of a matrix is found by interchanging its rows into columns or columns into rows.

Many grid-based games can be modeled as a matrix, such as Tic-Tac-Toe, Sudoku, Crossword, Connect 4, Battleship, etc. It is not uncommon to be asked to verify the winning condition of the game. For games like Tic-Tac-Toe, Connect 4 and Crosswords, where verification has to be done vertically and horizontally, one trick is to write code to verify the matrix for the horizontal cells, transpose the matrix, and reuse the logic for horizontal verification to verify originally vertical cells (which are now horizontal).

## Essential questions

These are essential questions to practice if you're studying for this topic.

- [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)
- [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)

## Recommended practice questions

These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- [Rotate Image](https://leetcode.com/problems/rotate-image/)
- [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)

# Linked list cheatsheet

### Introduction

Like arrays, a linked list is used to represent sequential data. It is a linear collection of data elements whose order is not given by their physical placement in memory, as opposed to arrays, where data is stored in sequential blocks of memory. Instead, each element contains an address of the next element. It is a data structure consisting of a collection of nodes which together represent a sequence.

In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence.

### Advantages

Insertion and deletion of a node in the list (given its location) is O(1) whereas in arrays the following elements will have to be shifted.

### Disadvantages

Access time is linear because directly accessing elements by its position in the list is not possible (in arrays you can do arr[4] for example). You have to traverse from the start.

### Types of linked lists

**_Singly linked list_**

A linked list where each node points to the next node and the last node points to null.

**_Doubly linked list_**

A linked list where each node has two pointers, next which points to the next node and prev which points to the previous node. The prev pointer of the first node and the next pointer of the last node point to null.

**_Circular linked list_**

A singly linked list where the last node points back to the first node. There is a circular doubly linked list variant where the prev pointer of the first node points to the last node and the next pointer of the last node points to the first node.

## Time Complexity

| Operation | Big-O |                                                 Note |
| :-------- | :---: | ---------------------------------------------------: |
| Access    | O(n)  |                                                      |
| Search    | O(n)  |                                                      |
| Insert    | O(1)  | Assumes you have traversed to the insertion position |
| Remove    | O(1)  | Assumes you have traversed to the node to be removed |

## Common routines

Be familiar with the following routines because many linked list questions make use of one or more of these routines in the solution:

- Counting the number of nodes in the linked list
- Reversing a linked list in-place
- Finding the middle node of the linked list using two pointers (fast/slow)
- Merging two linked lists together

## Techniques

**_Sentinel/dummy nodes_**

Adding a sentinel/dummy node at the head and/or tail might help to handle many edge cases where operations have to be performed at the head or the tail. The presence of dummy nodes essentially ensures that operations will never have be done on the head or the tail, thereby removing a lot of headache in writing conditional checks to dealing with null pointers. Be sure to remember to remove them at the end of the operation.

**_Two pointers_**

Two pointer approaches are also common for linked lists. This approach is used for many classic linked list problems.

- Getting the kth from last node - Have two pointers, where one is k nodes ahead of the other. When the node ahead reaches the end, the other node is k nodes behind
- Detecting cycles - Have two pointers, where one pointer increments twice as much as the other, if the two pointers meet, means that there is a cycle
- Getting the middle node - Have two pointers, where one pointer increments twice as much as the other. When the faster node reaches the end of the list, the slower node will be at the middle

**_Using space_**

Many linked list problems can be easily solved by creating a new linked list and adding nodes to the new linked list with the final result. However, this takes up extra space and makes the question much less challenging. The interviewer will usually request that you modify the linked list in-place and the solve the problem without additional storage. You can borrow ideas from the [**_Reverse a Linked List_**](https://leetcode.com/problems/reverse-linked-list/) problem.

**_Elegant modification operations_**

As mentioned earlier, a linked list's non-sequential nature of memory allows for efficient modification of its contents. Unlike arrays where you can only modify the value at a position, for linked lists you can also modify the next pointer in addition to the value.

Here are some common operations and how they can be achieved easily:

- Truncate a list - Set the next pointer to null at the last element
- Swapping values of nodes - Just like arrays, just swap the value of the two nodes, there's no need to swap the next pointer
- Combining two lists - attach the head of the second list to the tail of the first list

## Implementing a List Node in JavaScript

As stated earlier, a list node contains two items: the data and the pointer to the next node. We can implement a list node in JavaScript as follows:

```js
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

## Implementing a Linked List in JavaScript

The code below shows the implementation of a linked list class with a constructor. Notice that if the head node is not passed, the head is initialised to null.

```js
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}
```

## Putting it all together

Let's create a linked list with the class we just created. First, we create two list nodes, node1 and node2 and a pointer from node 1 to node 2.

```
let node1 = new ListNode(2)
let node2 = new ListNode(5)
node1.next = node2
```

Next, we'll create a Linked list with the node1.

```
let list = new LinkedList(node1)
```

Let's try to access the nodes in the list we just created.

```
console.log(list.head.next.data) //returns 5
```

## Some LinkedList methods

Next up, we will implement four helper methods for the linked list. They are:

1. size()
2. clear()
3. getLast()
4. getFirst()

## 1. size()

This method returns the number of nodes present in the linked list.

```js
size() {
    let count = 0;
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
```

## 2. clear()

This method empties out the list.

```js
clear() {
    this.head = null;
}
```

## 3. getLast()

This method returns the last node of the linked list.

```js
getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}
```

## 4. getFirst()

This method returns the first node of the linked list.

```js
getFirst() {
    return this.head;
}
```

**_Essential questions_**

These are essential questions to practice if you're studying for this topic.

[Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/)
[Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/)

**_Recommended practice questions_**

These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [Remove Nth Node From End Of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [Reorder List](https://leetcode.com/problems/reorder-list/)

# Queue cheatsheet

## Introduction

A queue is a linear collection of elements that are maintained in a sequence and can be modified by the addition of elements at one end of the sequence (enqueue operation) and the removal of elements from the other end (dequeue operation). Usually, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue. As an abstract data type, queues can be implemented using arrays or singly linked lists.

This behavior is commonly called FIFO (first in, first out). The name "queue" for this type of structure comes from the analogy to people lining up in real life to wait for goods or services.

Breadth-first search is commonly implemented using queues.

## Time Complexity

| Operation     | Big-O |
| :------------ | :---: |
| Enqueue/Offer | O(1)  |
| Dequeue/Poll  | O(1)  |
| Front         | O(1)  |
| Back          | O(1)  |

## Things to look out for during interviews

Most languages don't have a built in Queue class which to be used, and candidates often use arrays (JavaScript) or lists (Python) as a queue. However, note that the enqueue operation in such a scenario will be O(n) because it requires shifting of all other elements by one. In such cases, you can flag this to the interviewer and say that you assume that there's a queue data structure to use which has an efficient enqueue operation.

Most languages don't have a built in Queue class which to be used, and candidates often use arrays (JavaScript) or lists (Python) as a queue. However, note that the enqueue operation in such a scenario will be O(n) because it requires shifting of all other elements by one. In such cases, you can flag this to the interviewer and say that you assume that there's a queue data structure to use which has an efficient enqueue operation.

## Queue Implementation

```js
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}
```

## How it works

First, initialize the object that stores the elements of the queue (elements) and two variables for tracking the head and tail in the constructor:

```js
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  //...
}
```

Second, enqueue an element by adding it to the elements object to the end of the queue

```js
class Queue {
  //...
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  //...
}
```

Third, remove an element from the front of the queue

```js
class Queue {
  // ...
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  //...
}
```

Fourth, define the peek() method that accesses the element at the front of the queue

```js
class Queue {
  //...
  peek() {
    return this.elements[this.head];
  }
  //...
}
```

Fifth, get the length of the queue

```js
class Queue {
  //...
  get length() {
    return this.tail - this.head;
  }
  //...
}
```

The queue is empty when the length is zero.

Finally, define the isEmpty() method that returns true if the queue is empty:

```js
class Queue {
  // ...
  get isEmpty() {
    return this.tail - this.head;
  }
  // ...
}
```

## Create a new queue

To create a new queue from the Queue() constructor function, you use the new keyword as follows

```
let q = new Queue();
```

To enqueue numbers from 1 to 7, you use the following code.

```js
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
```

To get the number at the front of the queue, you use the peek() method.

```
console.log(q.peek()); // 1
```

To remove the element at the front of the queue, you use the dequeue() method as follows:

```js
// dequeue all elements
while (!q.isEmpty()) {
  console.log(q.dequeue());
}
```

put it all together

```js
class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
// get the current item at the front of the queue
console.log(q.peek()); // 1

// get the current length of queue
console.log(q.length); // 7

// dequeue all elements
while (!q.isEmpty) {
  console.log(q.dequeue());
}
```

## Essential questions

These are essential questions to practice if you're studying for this topic.

- [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues)

## Recommended practice questions

These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- [Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks)
- [Design Circular Queue](https://leetcode.com/problems/design-circular-queue)

# Stack cheatsheet

## Introduction

A stack is an abstract data type that supports the operations push (insert a new element on the top of the stack) and pop (remove and return the most recently added element, the element at the top of the stack). As an abstract data type, stacks can be implemented using arrays or singly linked lists.

This behavior is commonly called LIFO (last in, first out). The name "stack" for this type of structure comes from the analogy to a set of physical items stacked on top of each other.

Stacks are an important way of supporting nested or recursive function calls and is used to implement depth-first search. Depth-first search can be implemented using recursion or a manual stack.

## Stack Implementation

First, how do we store the data? What can we use in JavaScript to hold data? We can use native objects like arrays, which we are familiar with and use built-in methods, push and pop. Ok, I guess we’re done, see you later…

Nah, to understand how a stack works under the hood, we use the base Object form.

We need a constructor to establish the storage mechanism and properties upon its invocation.

```js
// Stack class
class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // push(item)
  // pop()
  // peek()
  // isEmpty()
  // printStack()
}
```

As you can see the above definition we have created a skeleton of a stack class which contains a constructor in which we declare an array to implement stack. Hence, with the creation of an object of a stack class this constructor would be called automatically.

- PUSH: Adds an element to the stack and

```js
// push function
push(element);
{
  // push element into the items
  this.items.push(element);
}
```

This method adds an element at the top of the stack.

- POP: Removes an element from the stack

```js
// pop function
pop();
{
  // return top most element in the stack
  // and removes it from the stack
  // Underflow if stack is empty
  if (this.items.length == 0) return "Underflow";
  return this.items.pop();
}
```

This method returns the topmost element of stack and removes it.

- PEEK: returns the top most elements in the stack, but doesn’t delete it.

```js
// peek function
peek();
{
  // return the top most element from the stack
  // but does'nt delete it.
  return this.items[this.items.length - 1];
}
```

## Essential questions

These are essential questions to practice if you're studying for this topic.

- Valid Parentheses
- Implement Queue using Stacks

## Recommended practice questions

These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- [Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)
- [Min Stack](https://leetcode.com/problems/min-stack)
- [Asteroid Collision](https://leetcode.com/problems/asteroid-collision)
- [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation)
- [Basic Calculator](https://leetcode.com/problems/basic-calculator)
- [Basic Calculator II](https://leetcode.com/problems/basic-calculator-ii)
- [Daily Temperatures](https://leetcode.com/problems/daily-temperatures)
- [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
- [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram)

# Tree cheatsheet

## Introduction

A tree is a widely used abstract data type that represents a hierarchical structure with a set of connected nodes. Each node in the tree can be connected to many children, but must be connected to exactly one parent, except for the root node, which has no parent.

A tree is an undirected and connected acyclic graph. There are no cycles or loops. Each node can be like the root node of its own subtree, making recursion a useful technique for tree traversal.

For the purpose of interviews, you will usually be asked on binary trees as opposed to ternary (3 children) or N-ary (N children) trees. In this page,we will cover binary trees and binary search trees, which is a special case of binary trees.

Trees are commonly used to represent hierarchical data, e.g. file systems, JSON, and HTML documents. Do check out the section on Trie, which is an advanced tree used for efficiently storing and searching strings.

## Common terms you need to know

- **_Neighbor_** - Parent or child of a node
- **_Ancestor_** - A node reachable by traversing its parent chain
  **_Descendant_** - A node in the node's subtree
- **_Degree_** - Number of children of a node
- **_Degree_** of a tree - Maximum degree of nodes in the tree
- **_Distance_** - Number of edges along the shortest path between two nodes
- **_Level/Depth_** - Number of edges along the unique path between a node and the root node
- **_Width_** - Number of nodes in a level

## Binary tree

Binary means two, so nodes in a binary trees have a maximum of two children.

## Binary tree terms

- Complete binary tree - A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
- Balanced binary tree - A binary tree structure in which the left and right subtrees of every node differ in height by no more than 1.

## Traversals

![tree image](https://upload.wikimedia.org/wikipedia/commons/5/5e/Binary_tree_v2.svg)

Given such a tree, these are the results for the various traversals.

- **_In-order traversal_** - Left -> Root -> Right
  - Result: 2, 7, 5, 6, 11, 1, 9, 5, 9
- **_Pre-order traversal_** - Root -> Left -> Right
  - Result: 1, 7, 2, 6, 5, 11, 9, 9, 5
- **_Post-order traversal_** - Left -> Right -> Root
  - Result: 2, 5, 11, 6, 7, 5, 9, 9, 1

Note that in-order traversal of a binary tree is insufficient to uniquely serialize a tree. Pre-order or post-order traversal is also required.

## Binary search tree (BST)

In-order traversal of a BST will give you all elements in order.

Be very familiar with the properties of a BST and validating that a binary tree is a BST. This comes up more often than expected.

When a question involves a BST, the interviewer is usually looking for a solution which runs faster than O(n)

## Things to look out for during interviews

You should be very familiar with writing pre-order, in-order, and post-order traversal recursively. As an extension, challenge yourself by writing them iteratively. Sometimes interviewers ask candidates for the iterative approach, especially if the candidate finishes writing the recursive approach too quickly.

## Common routines

Be familiar with the following routines because many tree questions make use of one or more of these routines in the solution:

- Insert value
- Delete value
- Count number of nodes in tree
- Whether a value is in the tree
- Calculate height of the tree
- Binary search tree
  - Determine if is binary search tree
  - Get maximum value
  - Get minimum value

## Techniques

**_Use recursion_**

Recursion is the most common approach for traversing trees. When you notice that the subtree problem can be used to solve the entire problem, try using recursion.

When using recursion, always remember to check for the base case, usually where the node is null.

Sometimes it is possible that your recursive function needs to return two values.

**_Traversing by level_**

When you are asked to traverse a tree by level, use breadth-first search.

**_Summation of nodes_**

If the question involves summation of nodes along the way, be sure to check whether nodes can be negative.

## Essential questions

These are essential questions to practice if you're studying for this topic.

- Binary Tree
  - [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
  - [Invert/Flip Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- Binary Search Tree
  - [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

## Recommended practice questions

These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- Binary tree
  - [Same Tree](https://leetcode.com/problems/same-tree/)
  - [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
  - [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
  - [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
  - [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
  - [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)
  - [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
  - [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
- Binary search tree
  - [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
  - [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

# Graph cheatsheet

## Introduction

A graph is a structure containing a set of objects (nodes or vertices) where there can be edges between these nodes/vertices. Edges can be directed or undirected and can optionally have values (a weighted graph). Trees are undirected graphs in which any two vertices are connected by exactly one edge and there can be no cycles in the graph.

Graphs are commonly used to model relationship between unordered entities, such as

Friendship between people - Each node is a person and edges between nodes represent that these two people are friends.
Distances between locations - Each node is a location and the edge between nodes represent that these locations are connected. The value of the edge represent the distance.

Be familiar with the various graph representations, graph search algorithms and their time and space complexities.

## Graph representations

You can be given a list of edges and you have to build your own graph from the edges so that you can perform a traversal on them. The common graph representations are:

- Adjacency matrix
- Adjacency list
- Hash table of hash tables

Using a hash table of hash table would be the simplest approach during algorithm interviews. It will be rare that you have to use adjacency matrix or list for graph questions during interviews.

In algorithm interviews, graphs are commonly given in the input as 2D matrices where cells are the nodes and each cell can traverse to its adjacent cells (up/down/left/right). Hence it is important that you be familiar with traversing a 2D matrix. When traversing the matrix, always ensure that your current position is within the boundary of the matrix and has not been visited before.

Things to look out for during interviews

- A tree-like diagram could very well be a graph that allows for cycles and a naive recursive solution would not work. In that case you will have to handle cycles and keep a set of visited nodes when traversing.

- Ensure you are correctly keeping track of visited nodes and not visiting each node more than once. Otherwise your code could end up in an infinite loop.

## Graph search algorithms

- **_Common_** - Breadth-first Search, Depth-first Search
- **_Uncommon_** - Topological Sort, Dijkstra's algorithm
- **_Almost never_** - Bellman-Ford algorithm, Floyd-Warshall algorithm, Prim's algorithm, Kruskal's algorithm. Your interviewer likely don't know them either.

## Depth-first search

Depth-first search is a graph traversal algorithm which explores as far as possible along each branch before backtracking. A stack is usually used to keep track of the nodes that are on the current search path. This can be done either by an implicit recursion stack, or an actual stack data structure.

## Depth First Search Implementation

DFS visits the nodes depth wise. Since we need to process the nodes in a Last In First Out manner, we’ll use a stack.

Starting from a vertex, we’ll push the neighboring vertices to our stack. Whenever a vertex is popped, it is marked visited in our visited object. Its neighboring vertices are pushed to the stack. Since we are always popping a new adjacent vertex, our algorithm will always explore a new level.

We can also use the intrinsic stack calls to implement DFS recursively. The logic is the same.

The time complexity is the same as BFS, O(V+E).

lets pseudocode it first

```
function DFS
   Initialize an empty stack, empty 'result' array & a 'visited' map
   Add the starting vertex to the stack & visited map
   While Stack is not empty:
     - Pop and store current vertex
     - Push current vertex to result array
     - Iterate through current vertex's adjacency list:
       - For each adjacent vertex, if vertex is unvisited:
         - Add vertex to visited map
         - Push vertex to stack
   Return result array
```

```js
Graph.prototype.bfs = function (start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
};
```

## Breadth-first search

Breadth-first search is a graph traversal algorithm which starts at a node and explores all nodes at the present depth, before moving on to the nodes at the next depth level. A queue is usually used to keep track of the nodes that were encountered but not yet explored.

A similar template for doing breadth-first searches on the matrix goes like this. It is important to use double-ended queues and not arrays/Python lists as enqueuing for double-ended queues is O(1) but it's O(n) for arrays.

## Breadth First Search Implementation

BFS visits the nodes one level at a time. To prevent visiting the same node more than once, we’ll maintain a visited object.

Since we need to process the nodes in a First In First Out fashion, a queue is a good contender for the data structure to use. The time complexity is O(V+E).

lets pseudocode it first

```
function BFS
   Initialize an empty queue, empty 'result' array & a 'visited' map
   Add the starting vertex to the queue & visited map
   While Queue is not empty:
     - Dequeue and store current vertex
     - Push current vertex to result array
     - Iterate through current vertex's adjacency list:
       - For each adjacent vertex, if vertex is unvisited:
         - Add vertex to visited map
         - Enqueue vertex
   Return result array
```

```js
Graph.prototype.bfs = function (start) {
  const queue = [start];
  const result = [];
  const visited = {};
  visited[start] = true;
  let currentVertex;
  while (queue.length) {
    currentVertex = queue.shift();
    result.push(currentVertex);
    this.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }
  return result;
};
```

## Essential questions

These are essential questions to practice if you're studying for this topic.

- [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [Flood Fill](https://leetcode.com/problems/flood-fill)
- [01 Matrix](https://leetcode.com/problems/01-matrix/)

## Recommended practice questions

These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- Breadth-first search
  - [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
- Either search
  - [Clone Graph](https://leetcode.com/problems/clone-graph/)
  - [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
- Topological sorting
  - [Course Schedule](https://leetcode.com/problems/course-schedule/)

# Heap cheatsheet

## Introductions

A heap is a specialized tree-based data structure which is a complete tree that satisfies the heap property.

- Max heap - In a max heap the value of a node must be greatest among the node values in its entire subtree. The same property must be recursively true for all nodes in the tree.
- Min heap - In a min heap the value of a node must be smallest among the node values in its entire subtree. The same property must be recursively true for all nodes in the tree.

In the context of algorithm interviews, heaps and priority queues can be treated as the same data structure. A heap is a useful data structure when it is necessary to repeatedly remove the object with the highest (or lowest) priority, or when insertions need to be interspersed with removals of the root node.

## Techniques

**_Mention of k_**

If you see a top or lowest k being mentioned in the question, it is usually a signal that a heap can be used to solve the problem, such as in Top K Frequent Elements.

If you require the top k elements use a Min Heap of size k. Iterate through each element, pushing it into the heap (for python heapq, invert the value before pushing to find the max). Whenever the heap size exceeds k, remove the minimum element, that will guarantee that you have the k largest elements.

## Essential questions

These are essential questions to practice if you're studying for this topic.

- [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)

## Recommended practice questions

These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

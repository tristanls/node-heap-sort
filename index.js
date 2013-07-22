/*

index.js - heap sort

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var Heap = require('binary-heap');

var heapSort = module.exports = function heapSort (array, ascending) {
    ascending = (typeof ascending === "undefined") ? true : ascending;
    var heapifyProcedure;
    var heapSize = array.length;
    array.unshift(-1); // turn into 1-indexed array
    if (ascending) {
        Heap.buildMaxHeap(array, heapSize);
        heapifyProcedure = Heap.maxHeapify;
    } else {
        Heap.buildMinHeap(array, heapSize);
        heapifyProcedure = Heap.minHeapify;
    }
    for (var i = array.length - 1; i > 1; i--) {
        var temp = array[i];
        array[i] = array[1];
        array[1] = temp;
        heapSize--;
        heapifyProcedure(array, 1, heapSize);           
    }
    array.shift(); // turn into 0-indexed array
    return array;
};
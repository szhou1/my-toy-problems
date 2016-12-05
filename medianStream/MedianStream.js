var MedianStream = function () {
  this.maxHeap = [];
  this.minHeap = [];
};

MedianStream.prototype = {
  insert: function (val) {
    if(this.maxHeap.length===0 || val <= this.peekMedian()) {
      this.maxHeap.push(val);
      this.maxHeapBubbleUp();
    } else if(this.minHeap.length===0 || val >= this.peekMedian()) {
      this.minHeap.push(val);
      this.minHeapBubbleUp();
    }
    if(this.maxHeap.length - this.minHeap.length > 1) {
      // balance
      var e = this.removeMax(this.maxHeap);
      this.minHeap.push(e);
      this.minHeapBubbleUp();
    } else if(this.minHeap.length - this.maxHeap.length > 1) {
      // balance
      var e = this.removeMin(this.minHeap);
      this.maxHeap.push(e);
      this.maxHeapBubbleUp();
    }

  },
  
  peekMedian: function () {
    var median;
    if(this.minHeap.length > this.maxHeap.length) {
      median = this.minHeap[0];
    } else if(this.minHeap.length < this.maxHeap.length) {
      median = this.maxHeap[0];
    } else {
      median = (this.minHeap[0] + this.maxHeap[0]) / 2;
    }
    return median;
  },
  
  size: function () {
    return this.minHeap.length + this.maxHeap.length;
  },

  removeMax(heap) {
    var e = heap[0];
    heap[0] = heap[heap.length-1];
    heap.splice(heap.length-1, 1);
    heap.unshift(null);

    var parentInd = 1;
    var smallerChildInd = heap[2] < heap[3] ? 2 : 3;
    while(heap[parentInd] < heap[smallerChildInd]) {
      //swap
      var temp = heap[parentInd];
      heap[parentInd] = heap[smallerChildInd];
      heap[smallerChildInd] = temp;
      // update
      parentInd = smallerChildInd;
      smallerChildInd = heap[parentInd * 2] < heap[parentInd * 2 + 1] 
                          ? parentInd * 2 
                          : parentInd * 2 + 1;

    }

    heap.shift();
    return e;
  },

  removeMin(heap) {
    var e = heap[0];
    heap[0] = heap[heap.length-1];
    heap.splice(heap.length-1, 1);
    heap.unshift(null);

    var parentInd = 1;
    var smallerChildInd = heap[2] < heap[3] ? 2 : 3;
    while(heap[parentInd] > heap[smallerChildInd]) {
      //swap
      var temp = heap[parentInd];
      heap[parentInd] = heap[smallerChildInd];
      heap[smallerChildInd] = temp;
      // update
      parentInd = smallerChildInd;
      smallerChildInd = heap[parentInd * 2] < heap[parentInd * 2 + 1] 
                          ? parentInd * 2 
                          : parentInd * 2 + 1;

    }

    heap.shift();
    return e;
  },

  maxHeapBubbleUp() {
    var targetInd = this.maxHeap.length-1;
    var parentInd = Math.floor(targetInd / 2);

    while(this.maxHeap[targetInd] > this.maxHeap[parentInd]) {
      //swap
      var temp = this.maxHeap[targetInd];
      this.maxHeap[targetInd] = this.maxHeap[parentInd];
      this.maxHeap[parentInd] = temp;

      //update
      targetInd = parentInd;
      parentInd = Math.floor(targetInd / 2);
    }
  },

  minHeapBubbleUp() {
    var targetInd = this.minHeap.length-1;
    var parentInd = Math.floor(targetInd / 2);

    while(this.minHeap[targetInd] < this.minHeap[parentInd]) {
      //swap
      var temp = this.minHeap[targetInd];
      this.minHeap[targetInd] = this.minHeap[parentInd];
      this.minHeap[parentInd] = temp;

      //update
      targetInd = parentInd;
      parentInd = Math.floor(targetInd / 2);

    }
  }

};

// var mStream = new MedianStream();
// mStream.insert(10);
// mStream.insert(2);
// // mStream.peekMedian();
// mStream.insert(3);
// mStream.insert(4);
// // mStream.peekMedian(); 

// mStream.insert(5);
// mStream.insert(6);
// mStream.insert(7);
// mStream.insert(8);
// console.log(mStream.peekMedian()); 

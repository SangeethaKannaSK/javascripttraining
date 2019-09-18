/**
 * Linked List 
 * 
 * Similar to arrays but dynamic 
 * 
 * Insertion and deletion is very efficient
 */

 let LinkedNode = function(element) {
    this.element = element;
    this.next = null;
 }

 function LinkedList() {
     var length = 0 ;
     var head = null;

     this.size = function () {
         return length;
     }

     this.head = function () {
         return head;
     }

     this.print = function () {
        var currentNode = head;
        if(currentNode === null){
            console.log("List is empty");
            return false;
        }

        while(currentNode != null) {
            console.log(currentNode.element);
            currentNode = currentNode.next;
        }
     }

     this.add = function (element) {
         var node = new LinkedNode(element);

         if(head === null) {
            head = node;
         } else {
            var currentNode = head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
         }

         length++;
     }

     this.remove = function(element) {
         var currentNode = head;
         var previousNode;
         if(currentNode.element === element) {
            head = currentNode.next;
         } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
             }
    
             previousNode.next = currentNode.next;
         }        

         length--;
     }

     this.isEmpty = function() {
         return length === 0;
     }

     this.indexOf = function(element){
         var currentNode = head;
         var index = -1;

         while(currentNode) {
             index++;
             if(currentNode.element === element) {
                 return index;
             }
             currentNode = currentNode.next;
         }

         return -1;
     }
    
     this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
        while(count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
     }

     this.addAt = function(index, element) {
         var node = new LinkedNode(element);
         var currentNode = head;

         if(index > length ){
             return false;
         } else if (index === 0 ) { 
            currentNode.next = head;
            head = currentNode;
         } else {
             var currentIndex = 0;
             while(currentIndex < index) {
                 currentIndex++;
                 previousNode = currentNode;
                 currentNode = currentNode.next;
             }
             node.next = currentNode;
             previousNode.next = node;
         }
         length++;         
     }

     this.removeAt = function(index, element){
         var node = new LinkedNode (element);
         var currentNode = head;

         if( index < 0 || index >= length) {
             return null;
         }
         
         if(index === 0 ) {
            head = currentNode.next;            
         } else {
            var currentIndex = 0;
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }            
            previousNode.next = currentNode.next;
         }
         length--;
         return currentNode.element;
     }

     
 }
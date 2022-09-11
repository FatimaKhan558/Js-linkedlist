class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
};

class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    isEmpty(){
        return (this.length === 0);
    }
    insertAtBeginning(value){
        if(this.head == null)
        {
            this.head = value;
        }
        let temp = new Node(value);
        this.head = temp;
        this.length++;
    }
    insertAtLast(value)
    {
        if(this.isEmpty())
        {
            this.insertAtBeginning(value);
        }
        else{
            let temp = this.head;
            while(temp.next != null)
            {
                temp = temp.next;
            }
            var temp1 = new Node(value);
            temp.next = temp1;
            this.length++;
        }
    }
    removeFromBeginning()
    {
        if(this.isEmpty())
        {
            return false;
        }
        else if(this.length == 1 )
        {
            this.head = null;
        }
        else{
            this.head = this.head.next;
        }
        this.length--;
    }
    removeFromLast(){
        if(this.isEmpty())
        {
            return false;
        }
        else if(this.length === 1)
        {
            this.head = null;
            this.length--;
        }
        else{
            let temp1 = this.head;
            let temp2 = null;
            while(temp1.next)
            {
                temp2 = temp1;
                temp1 = temp1.next;
            }
            temp2.next=null; 
            this.length--;
        }
    }
    getLenght(){
        return this.length;
    }
    
    printAll(){
        var temp = this.head;
        var str = "";
        while(temp){
            str += (temp.data + "->");
            temp = temp.next;
        }
        console.log(str+"NULL\n");
    }
};

l1 = new LinkedList();
console.log("Is Empty ? = " + l1.isEmpty());
l1.insertAtBeginning(1);
l1.insertAtLast(2);
l1.insertAtLast(3);
l1.insertAtLast(4);
l1.insertAtLast(5);
l1.printAll();
console.log("Length = " + l1.getLenght());
l1.removeFromLast();
l1.printAllValue();

#include<iostream>
using namespace std;

int main()
{   
    int key , count = 0;
    int arr[5] = {1,2,5,2,5};
    cout<<"Enter the value to be checked : ";
    cin>>key;

    for(int i = 0 ; i <5 ; i++)
    {
       if(arr[i] == key) 
       { 
        count += 1;
       }  
    }

    cout<<"Number of times the "<< key <<" present in the array is "<<count;
}
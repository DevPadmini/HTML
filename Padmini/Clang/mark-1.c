#include<stdio.h>
void getGrade(){
int marks ;
printf("Enter your marks : ");
scanf("%d, & marks");
if (marks > = 85){
    printf("A Grade");
}
else if (marks < 85 && marks > 60){
    printf("B Grade");
}
else if (marks < 60 && marks > 40){
    printf("C Grade");
}
else if (marks < 40 && marks > 35){
    printf("D Grade");
}
else {
    printf("fail");
}
}
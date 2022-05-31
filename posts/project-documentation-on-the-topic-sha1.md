---
title: "Project on the topic SHA-1"
metaTitle: "Learn how to convert your password into hashes and hashes into password."
metaDesc: "This project is all about SHA-1 (Secure Hash Algorithm). I have created a program which hashes your password. And also, I have made SHA-1 brute-force program which will convert the hashes into password."
socialImage: image/thumbnail-img.jpg
date: "25th Oct 2021"
---

### _Description_ :-

This project is all about SHA-1 (Secure Hash Algorithm). I have
implemented this on python and created a program which hashes your password (Basically it will convert your password in a unique string of texts). And also, I have made SHA-1 brute-force program which will convert the hashes into password.
So,I have made two programs, One will convert your password into hashes and other one will convert the hashes into password.

## 1. Program to hash your password using SHA-1 Algorithm.

### _Description_ :-

As this program is implemented using python, python comes with some libraries like hashlib, bcrypt and many more but in this program I haven’t used any libraries, I have maked this program with pure python code without any libraries with SHA-1 logic.

### _Implementation Process_ :-

- First, I processed a chunk of data.. the message length and chunk size.
- Second, I took initial hash values (Digest Variables).
- Third, The pre-processing will start and we will break the chunks into sixteen four bytes big-endian words and then extend the sixteen four bytes words into eighty four bytes words.
- Fourth, At last, after all the process we will print the hashed value.

[Click here to see the code](https://github.com/Yuvraj-Kaushal/SHA-1-Project)

### _Example Output_ :-

So, Below you can see the output of the program. The program is running fine and also generating hash values.

![Output](/image/output.png)

## 2. Program to crack the hashes via brute-force attack.

### _Description_ :-

So, This program is all about SHA-1 hash cracking via brute-force attack. To implement this, I have used some libraries like urllib.request and hashlib.

**_urllib.request_** - It is a python module for fetching URLs. It offers a very simple interface in the form of the urlopen function. So, in this program I will fetch the URL from the urlopen function.

**_hashlib_** - It is a module which implements a common interface to many different secure hash and message digest algorithms. Included are the FIPS secure hash algorithms SHA1, SHA224, SHA256, SHA384, and SHA512 (defined in FIPS 180-2) as well as RSA’s MD5 algorithm.

### _Implementation Process_ :-

- First, I will import the hashlib and urllib.request library.
- Second, I will take input from the user. 
- Third, I will open a file full of password guesses. (I have maked my own URL of passwords)
- Fourth, I will take a guess from the list of passwords I opened, and split it by line.
- Fifth, I will hash the guess we took from the password list so we can compare it to the hash the user gave us.
- Sixth, I will compare the hash the user gave us to the hashed version of the password guess and determine if they are equal.
- Seventh, I will tell the program what to do if the password guess matches, which is to print the current guess and quit the program. And I will also tell the program what to do if the password guess don't match, which is to return to step 3 to get a new password from the list.
- Eighth, At last I will tell the program what to do if we get all the way through the password list without finding a match.

[Click here to see the code](https://github.com/Yuvraj-Kaushal/SHA-1-Project)

### _Example Output_ :-

When I gave some hash to test the program, I found the password that was used to create a hash, allowing us to reverse the one way SHA-1 hash as shown below.

![Output](/image/output1.png)

And, When I gave the hash which was not there, I did not find a 
matching password in the list as you can see below.

![Output](/image/output2.png)

### _Conclusion_ :-

So, The programs are running well and generating output with no errors. I learned a lot while doing this project and it was fun to do. Also, you can implement this on your own and do check my [Github](https://github.com/Yuvraj-Kaushal) more awesome projects.

---

# ENV Examples

## Synopsis
This in-class example has been edited far more than usual. During class, we discussed .env files, 
why they may be used, and how to use them. We went over a BRIEF (and semi-convoluted) example of 
how to use a .env in Node.js as well as to simulate it in regular ("vanilla") JavaScript. 

I figured it would be a good idea to present you all with a simpler Node.js example and a slightly
more fleshed out vanilla JavaScript example. **PLEASE NOTE that you will not actually find a .env**
**or env.js file in these examples.** They have been included in the .gitignore and you must create 
them. Additionally, in each directory you will find another README.md file that gives an example of
how students can walk a project-grader through creating a .env file 

## Bonus .env and git method
What if I decide that I _do_ want to commit a placeholder .env file with the below line?
> API_KEY = '{YOUR_API_KEY_HERE}'

This is do-able! 
1. First create the .env file with the above line in it.
2. Commit it.
3. THEN add the .env file to the .gitignore file.

Git will now stop tracking changes to the .env file. You can now update the file with your real api key with no fear of accidentally committing it.

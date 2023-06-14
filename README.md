# The Breakdown
I have four folders in this repository.Below is a
breakdown of each.

# 1. Basic unit test
This is where I illustrate a test of a regular function

#  2. Mock Callbacks
I made an example where we mock a callback function . 
firstly we need to understand why we mock. Mocks are useful 
when we have non-deterministic dependencies ,external sources
of data and side effects,since  our tests are not for dependency
behavior we can replace these dependencies with mocks provided
by jest to control input and otput while running tests.so basically
mock lets us test  areas of code outside our control e.g callbacks,
APIs ,databases and Modules

#  3. Mock Modules
This folder shows the concept of module mocking.In the example I made
I explained how a module which we created can perform the role of external
modules like axios for instance.This will enable learner recognize a pattern 
when dealing with a scenerio where they see a dependency like axios mocked 
in an async request.

# 4. spy Modules
The jest.spyOn() allows us create a "spy"on an object,a module ,a method or 
function to track it's usage during tests.The spy keeps track on the number of 
times a method was called for instance.
it  generally has the form

```
const spy=jest.spyOn(object,'methodName')
```
we then go ahead to pass spy as our received within our test suite
i.e within test suite  we `expect(spy).toHaveBeenCalled()`

// Jairo
// User can retrieve the book list paginated
// User can switch the display mode from list to grid

// Coco
// User can filter books by name
// User can filter books by desc

// Diego
// User can log in.
// User can choose a book to read (paperbook)

// Luis
// User can choose a book to download
// User can log out.

Feature: User
  In order to retrieve the book list
  As a user at the homepage
  So that I can request a book to read

  Scenario: retrieve book list
    Given I am at the homepage
    Then I should see all the books list

  Scenario: display list mode
    Given the user clicked list icon
    Then I should see the books list mode

  Scenario: display block mode
    Given the user clicked block icon
    Then I should see the books block mode


Feature: Capitals 
Scenario Outline: Capitals Search

Given url e git
And arama yapilacak "<world capitals>"
Then arama yapildigini kontrol et "<world capitals>"

Examples:
    | world capitals | 
    | London  |
    | Paris  |
    | Rome  |
    | Ankara  |

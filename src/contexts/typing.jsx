import React, { useState, createContext, useContext } from 'react'
import produce from 'immer'

const typingContext = createContext()

const initialTyping = { typed: [] }

export function TypingProvider({ children }) {
  const [typeState, setTypeState] = useState(initialTyping)

  const typing = (key) => {
    const characterPush = (char) => {
      setTypeState(produce(typeState, (draft) => {
        draft.typed = [char]
      }))
    }
    switch (key) {
      case 'Tab':
        characterPush('tab')
        break
      case 'Backspace':
        characterPush('backspace')
        break
      case ' ':
        characterPush(' ')
        break
      case '!':
        characterPush('!')
        break
      case '"':
        characterPush('"')
        break
      case '#':
        characterPush('#')
        break
      case '$':
        characterPush('$')
        break
      case '%':
        characterPush('%')
        break
      case '&':
        characterPush('&')
        break
      case '(':
        characterPush('(')
        break
      case ')':
        characterPush(')')
        break
      case '*':
        characterPush('*')
        break
      case '+':
        characterPush('+')
        break
      case ',':
        characterPush(',')
        break
      case '-':
        characterPush('-')
        break
      case '.':
        characterPush('.')
        break
      case '/':
        characterPush('/')
        break
      case '0':
        characterPush('0')
        break
      case '1':
        characterPush('1')
        break
      case '2':
        characterPush('2')
        break
      case '3':
        characterPush('3')
        break
      case '4':
        characterPush('4')
        break
      case '5':
        characterPush('5')
        break
      case '6':
        characterPush('6')
        break
      case '7':
        characterPush('7')
        break
      case '8':
        characterPush('8')
        break
      case '9':
        characterPush('9')
        break
      case ':':
        characterPush(':')
        break
      case ';':
        characterPush(';')
        break
      case '<':
        characterPush('<')
        break
      case '=':
        characterPush('=')
        break
      case '>':
        characterPush('>')
        break
      case '?':
        characterPush('?')
        break
      case '@':
        characterPush('@')
        break
      case 'A':
        characterPush('A')
        break
      case 'B':
        characterPush('B')
        break
      case 'C':
        characterPush('C')
        break
      case 'D':
        characterPush('D')
        break
      case 'E':
        characterPush('E')
        break
      case 'F':
        characterPush('F')
        break
      case 'G':
        characterPush('G')
        break
      case 'H':
        characterPush('H')
        break
      case 'I':
        characterPush('I')
        break
      case 'J':
        characterPush('J')
        break
      case 'K':
        characterPush('K')
        break
      case 'L':
        characterPush('L')
        break
      case 'M':
        characterPush('M')
        break
      case 'N':
        characterPush('N')
        break
      case 'O':
        characterPush('O')
        break
      case 'P':
        characterPush('P')
        break
      case 'Q':
        characterPush('Q')
        break
      case 'R':
        characterPush('R')
        break
      case 'S':
        characterPush('S')
        break
      case 'T':
        characterPush('T')
        break
      case 'U':
        characterPush('U')
        break
      case 'V':
        characterPush('V')
        break
      case 'W':
        characterPush('W')
        break
      case 'X':
        characterPush('X')
        break
      case 'Y':
        characterPush('Y')
        break
      case 'Z':
        characterPush('Z')
        break
      case '[':
        characterPush('[')
        break
      case ']':
        characterPush(']')
        break
      case '^':
        characterPush('^')
        break
      case '_':
        characterPush('_')
        break
      case '`':
        characterPush('`')
        break
      case 'a':
        characterPush('a')
        break
      case 'b':
        characterPush('b')
        break
      case 'c':
        characterPush('c')
        break
      case 'd':
        characterPush('d')
        break
      case 'e':
        characterPush('e')
        break
      case 'f':
        characterPush('f')
        break
      case 'g':
        characterPush('g')
        break
      case 'h':
        characterPush('h')
        break
      case 'i':
        characterPush('i')
        break
      case 'j':
        characterPush('j')
        break
      case 'k':
        characterPush('k')
        break
      case 'l':
        characterPush('l')
        break
      case 'm':
        characterPush('m')
        break
      case 'n':
        characterPush('n')
        break
      case 'o':
        characterPush('o')
        break
      case 'p':
        characterPush('p')
        break
      case 'q':
        characterPush('q')
        break
      case 'r':
        characterPush('r')
        break
      case 's':
        characterPush('s')
        break
      case 't':
        characterPush('t')
        break
      case 'u':
        characterPush('u')
        break
      case 'v':
        characterPush('v')
        break
      case 'w':
        characterPush('w')
        break
      case 'x':
        characterPush('x')
        break
      case 'y':
        characterPush('y')
        break
      case 'z':
        characterPush('z')
        break
      case '{':
        characterPush('{')
        break
      case '|':
        characterPush('|')
        break
      case '}':
        characterPush('}')
        break
      case '~':
        characterPush('~')
        break

      default:
        // console.log('invalid key:', key)
        break
    }
  }

  const contextData = {
    typedPassage: typeState,
    typing
  }

  return <typingContext.Provider value={contextData}>{children}</typingContext.Provider>
}

export function useTyping() {
  return useContext(typingContext)
}

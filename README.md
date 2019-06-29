# PHONET SDK

![version](https://img.shields.io/badge/version-v1.0.0-red.svg)
[![node](https://img.shields.io/badge/node-v11.6.0-green.svg)](https://nodejs.org/en/)
[![yarn](https://img.shields.io/badge/yarn-1.15.2-blue.svg)](https://yarnpkg.com/lang/en/)

## How to use

### Setup

Install it:

```bash
yarn add phonet-sdk
```

Initialize:

`services/phonet.js`
```js
import Phonet from 'phonet-sdk'

const default Phonet({
  domain: 'test4.phonet.com.ua',              
  apiKey: 'bHGbn240QSjFJgydW0WyZ3v6UeNDT8CV'
})
```

`Phonet` object recived the following properties:

- `domain` - your api server from the Phonet dashboard
- `apiKey` - your api key from the Phonet dashboard

### Usage

#### WebSockets

##### Subscribe for call

```js
import Phonet from 'services/phonet.js'

const id = '007'

const socket = await Phonet.wss.subscribeToCall(id)
```

`subscribeToCall` method recived the following properties:

- `id` - user id to subscribe

#### Teler CRM

##### Write contacts

```js
import Phonet from 'services/phonet.js'

const data = {
  merge : 1, 
  contacts : [{
    id: 7068,
    lastModified: 1443597876359,
    responsibleUserId: 18,
    createUserId: 59,
    fields: [{
      id: 32134,
      enumCode: 'Category',
      values: [{
        id: 12334,
        enumValueCode: 'Category',
        lastModified: 1443597876359,
        value: 'EMPL'
      }]
    }]
  }]
}

const res = await Phonet.teler.postContacts(data)
```

`postContacts` method recived the following properties:

- `data` - for more information please see Phonet documentation :p

##### Search contact by phone number

```js
import Phonet from 'services/phonet.js'

const phoneNumber = '+380111222333'

const contact = await Phonet.teler.searchContactByPhoneNumber(phoneNumber)
```

`searchContactByPhoneNumber` method recived the following properties:

- `phoneNumber` - contact phone number
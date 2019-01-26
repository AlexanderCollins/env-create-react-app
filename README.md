# env-create-react-app [![Build Status](https://travis-ci.com/AlexanderCollins/env-create-react-app.svg?branch=master)](https://travis-ci.com/AlexanderCollins/env-create-react-app)
For those using **create-react-app** wishing to refrence their .env file variables without the REACT_APP prefix.

## Usage

### Your .env file	
~~~~
REACT_APP_MY_ENVIRONMENT_VARIABLE_A=foo
REACT_APP_MY_ENVIRONMENT_VARIABLE_B=bar
~~~~

### Example
~~~~
import {
    MY_ENVIRONMENT_VARIABLE_A,
    MY_ENVIRONMENT_VARIABLE_B
} from 'env-create-react-app';
~~~~

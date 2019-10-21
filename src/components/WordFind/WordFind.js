const fs = require("fs");

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



// const fs = require ("fs");

// const dictArr = fs.readFileSync(__dirname + "/words.txt").toString().split("\n");



class WordFind extends Component {

  state = {
    inputString: ''
  }

  handleChange = (event) => {
    console.log('in handleChange', event.target.value);
    this.setState({
      inputString: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('in handleSubmit', this.state.inputString);
    let inputString = this.state.inputString
    var inarray = inputString.replace(/[\n\r]/g, '/').replace(/([' ''])/g, '').split('/')

    var final = inarray.map((val) => val.split(''));

    //Print all combinations of the stirngs greater than or equzl to 3
    var hArray = []
    for (var i = 0; i < final.length; i++) {

      var a = final[i]
      //console.log(a);
      //console.log("iteration number  " +i)
      for (var j = 0; j < a.length; j++) {

        for (var k = j + 3; k <= a.length; k++) {
          hArray.push(a.slice(j, k).join(''))
        }
      }
    }


    ///Print all vertical combinations of the stirngs greater than or equal to 3
    var vArray = []
    for (var i = 0; i < final.length; i++) {

      var aaa = final[i]

      for (var j = 0; j < aaa.length; j++) {

        for (var k = i + 2; k <= final.length - 1; k++) {
          var cnct = ''
          for (var m = i; m <= k; m++) {
            cnct += final[m][j]
          }

          vArray.push(cnct)

        }
      }
    }



    //console.log(vArray)
    //console.log(hArray)

    const dictArr = fs.readFileSync(__dirname + "/words.txt").toString().split("\n");
    console.log(dictArr.length)
    var matchArrayV = []



    for (var i = 0; i <= vArray.length; i++) {
      for (var j = 0; j <= dictArr.length; j++) {
        if (vArray[i] === dictArr[j]) {
          console.log(vArray[i])
        }
      }
    }


    for (var i = 0; i <= hArray.length; i++) {
      for (var j = 0; j <= dictArr.length; j++) {
        if (vArray[i] === dictArr[j]) {
          console.log(vArray[i])
        }
      }
    }




    console.log(matchArrayV)
    //console.log(matchArrayH)

  }
  render() {

    return (
      <div>

        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.handleSubmit}>
          <h2>Word Finder Search</h2>

          <Grid item xs={12}>
            <TextField
              id="matrix"
              label="search"
              onChange={this.handleChange}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <center>
            <Button
              type="submit"

            >
              Find Words
          </Button>
          </center>
          {/* <form onSubmit={this.handleSubmit}>
          <input type='text'  onChange={this.handleChange} />
          <input type='submit' value='Find Words' />

      </form> */}
        </form>
      </div>
    );
  }
}

export default WordFind;

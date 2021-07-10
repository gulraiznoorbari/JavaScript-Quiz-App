import React, { Component } from 'react'
import dataSet from '../API/dataSet';
import QuizArea from './QuizArea';
import ScoreArea from './ScoreArea';

export default class Questionnaire extends Component {

    constructor() {
        super(); 
        this.state = {
            current: 0,
            dataSet: dataSet,
            correct: 0,
            incorrect: 0,
            isFinished: false,
            pass: false,
            fail: false,
        } 
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(choice) {
        
        if (choice == this.state.dataSet[this.state.current].correct) {
            this.setState (
                {correct: this.state.correct + 1}
            )
        } else {
            this.setState (
                {incorrect: this.state.incorrect + 1}
            )
        }
        // When the quiz finishes:
        if (this.state.current == this.state.dataSet.length - 1) {
            this.setState (
                {isFinished: true}
            )
        } else {
            this.setState (
                {current: this.state.current + 1}
            )
        }
        // Pass/Fail Status:
        if (this.state.correct == 2) {
            this.setState (
                {pass: true}
            )
        }
        if (this.state.incorrect == 2) {
            this.setState (
                {fail: true}
            )
        }
    }

    render() {

        return (
            <div> 
                <QuizArea handleClick={this.handleClick} isFinished={this.state.isFinished} pass={this.state.pass} fail={this.state.fail} dataSet={this.state.dataSet[this.state.current]}/>
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect}/>
            </div>
        )
    }
}

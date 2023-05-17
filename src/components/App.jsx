import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const options = ['good', 'bad', 'neutral'];

export const  App =() => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)


  const countTotalFeedback = () => {    
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
        return Math.floor((100 / (good + neutral + bad)) * good) || 0;
  };

  const onClickButton = e => {
   const type =  e.target.dataset.type
   console.log(type)
    if(type === 'good') setGood(prevState => prevState + 1);
    if(type === 'neutral') setNeutral(prevState => prevState + 1);
    if(type === 'bad') setBad(prevState => prevState + 1);
    
    
    
   
  };

  
    return (
      <>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onClickButton}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification massege="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }


// FAQList.js
import React from 'react';
import FAQItem from './FAQItem';

const FAQList = () => {
  const faqData = [
    {
      question: 'Who all can register?',
      answer: "If you love to code, you are more than welcome to participate in the hackathon. The event is live on Unstop. We request all VIT participants to also register on the VTOP portal.",
    },
    {
      question: 'How big can a team be? ',
      answer: "Up to 4 people large! Pro Tip: Aim to have a mix of people with both design and developer skills.",
    },
    {
      question: 'Do I Keep Working Throughout the Event',
      answer: "Of course not. We have numerous fun-filled mini-events in the bag for you. Stay tuned to our social media handles for detailed updates on the mini-events.",
    },
    {
      question: 'How is the environment? Will your environment support any language? Will you provide any IDE and DB for us to work on ideas',
      answer: "You have to develop the entire software application on your local system and push the code to GitHub repository and submit repository link on Unstop."
    },
    {
      question: 'Can I bring my previous project to the hackathon?',
      answer: "We apologize, but all hackathon's projects should be developed during the event from scratch. We want honest conditions for all hackers. That's why all code should be done during the hackathon.",
    },
    {
      question: 'I am a newbie, can I hack?',
      answer: "Of course, you can! We at Technica ensure that no one is left behind during the hacking, thanks to our mentors and volunteers who help us achieve the same. We make sure that you learn the best you can alongside having fun and experiencing what it feels to belong to a community.",
    },
    {
      question: 'Do I need to give a demo for the product that I have built?',
      answer: "If you want you can submit a small presentation or video that demos your submission, however it's not mandatory, and only good to have. In case you are one of the winners, you might be invited to demo your application at a physical event, details of which will be shared with sufficient advance notice.",
    },
    {
      question: 'Are these the only themes/tracks for the hackathon?',
      answer: "We never want to limit your innovation. Under the category of Open Innovation, you can work on any project of your choice which can be of any theme.",
    },
    {
      question: 'If it is a team submission, does that mean all team members will have access to work at the same time? ',
      answer: "Yes, all team members can login from their account and do application submission on Unstop"
    },
    
    
  ];

  return (
    <div className="max-w-lg mx-auto">
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
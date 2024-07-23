import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import React, { useState } from 'react';
import { Input } from '../utils/Input';
import GenericForminput from '@/Shared/GenericFormInput';
import { useFeedBack } from '../hook/useFeedBack';

const FeedBack = () => {
  // const [rating, setRating] = useState(4);
  const [comments, setComments] = useState('');
  const [feedbackType, setFeedbackType] = useState('');
  const {form, onSubmit, } = useFeedBack()
  // const handleRatingChange = (newRating) => {
  //   setRating(newRating);
  // };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleFeedbackTypeChange = (event) => {
    setFeedbackType(event.target.value);
  };

  // const handleSubmit = () => {
  //   // Handle form submission logic
  //   console.log('Feedback submitted:', { rating });
  // };

  return (
    <div className="lg:w-[50%] md:w-[60%] sm:w-[85%] w-[95%] mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-8 shadow">
      <div className="bg-red-600 text-white  p-4 rounded-t-lg w-[100%]">
        <h1 className="lg:text-lg md:text-lg sm:text-sm text-sm font-semibold m-[4%]">Send us your feedback!</h1>
        <p className='mt-4 m-[4%] text-sm'>Do you have any suggestion or found some bug?</p>
        <p className='mt-4 m-[4%] text-sm'>Let know in the field below</p>
      </div>
      <div className="p-4">
        <h2 className="font-semibold">Share your experience in scaling</h2>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              onClick={() => handleRatingChange(star)}
              // className={`w-8 h-8 cursor-pointer ${
              //   rating >= star ? 'text-yellow-500' : 'text-gray-300'
              // }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.375 2.453a1 1 0 00-.364 1.118l1.286 3.956c.3.921-.755 1.688-1.54 1.118l-3.375-2.453a1 1 0 00-1.176 0l-3.375 2.453c-.784.57-1.84-.197-1.54-1.118l1.286-3.956a1 1 0 00-.364-1.118L2.09 9.383c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.956z" />
            </svg>
          ))}
        </div>
        {/* <textarea
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          placeholder="Describe your experience here"
          value={comments}
          onChange={handleCommentsChange}
        /> */}
        {/* <div className="flex items-center mb-4 space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="feedbackType"
              value="Bug"
              className="form-radio"
              checked={feedbackType === 'Bug'}
              onChange={handleFeedbackTypeChange}
            />
            <span className="ml-2">Bug</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="feedbackType"
              value="Suggestions"
              className="form-radio"
              checked={feedbackType === 'Suggestions'}
              onChange={handleFeedbackTypeChange}
            />
            <span className="ml-2">Suggestions</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="feedbackType"
              value="Others"
              className="form-radio"
              checked={feedbackType === 'Others'}
              onChange={handleFeedbackTypeChange}
            />
            <span className="ml-2">Others</span>
          </label>
        </div> */}
        {/* <button
          
        >
          
        </button> */}
        {/* <Button
        onClick={handleSubmit}
          className="w-full bg-red-600 text-white py-2 rounded-lg"
        >
        Send Feedback
        </Button> */}
           <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {
          Input.map((input,i)=>{
          return(
            <GenericForminput key={i} form={form} {...input}/>
          )
          })
        }
        <Button className="w-full bg-red-600 text-white py-2 rounded-lg" type="submit" >Send Feedback</Button>
      </form>
    </Form>
      </div>
    </div>
  );
};

export default FeedBack;

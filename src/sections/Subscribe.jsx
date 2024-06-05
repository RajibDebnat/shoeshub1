import { useState } from 'react';
import Button from '../components/Button';

const Subscribe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-container justify-between items-center flex flex-col gap-10">
      <h3 className=" text-slate-200 text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-center max-sm:text-[35px] max-sm:leading-[50px]">
        Sign Up for <span className="text-coral-red">Updates</span> &
        Newsletter!
      </h3>
      <form
        onSubmit={handleSubmit}
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray justify-between rounded-full"
        method="POST"
      >
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border focus:outline-none focus:border-transparent max-sm:border max-sm:border-slate-gray rounded-full p-2 w-[50%] max-sm:w-[100%] h-10"
          type="email"
          placeholder="subscribe@shoeshub.com"
        />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button
            type="submit"
            label="Sign Up"
            fullWidth
            disabled={isLoading}
          />
        </div>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {isLoading && <p>Submitting...</p>}
    </section>
  );
};

export default Subscribe;

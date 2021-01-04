import classNames from 'classnames';

interface InputGroupProps {
  className?: string;
  type: string;
  placeholder: string;
  value: string;
  error: string | undefined;
  setValue: (str: string) => void;
}

const InputGroup: React.FC = () => {
  return (
    <div className='mb-2'>
      <input
        type='text'
        placeholder='Email'
        className={classNames(
          'w-full p-3 px-3 py-2 transition duration-200 border border-gray-300 rounded outline-none bg-gray-50 focus:bg-white hover:bg-white',
          { 'border-red-500': errors.email },
        )}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <small className='font-medium text-red-600'>{errors.email}</small>
    </div>
  );
};

export default InputGroup;

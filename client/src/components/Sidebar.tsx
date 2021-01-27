export default function Sidebar() {
  return (
    <div className='ml-6 w-80'>
      <div className='bg-white rounded'>
        <div className='p-3 bg-blue-500 rounded-t'>
          <p className='font-semibold text-white'>About Community</p>
        </div>
        <div className='p-3'>
          <p className='mb-3 text-md'>{sub.description}</p>
        </div>
      </div>
    </div>
  );
}

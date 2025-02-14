
function Users(){
  const usersData = [
    {
      name: 'Sarah Dole',
      username: 'sarahdole',
      message: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
      profilePic: '../../../public/img/profile1.jpg'
    },
    {
      name: 'Jake Johnson',
      username: 'jakejohnshon',
      message: "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
      profilePic: '../../../public/img/profile2.jpg'
    },
    {
      name: 'Marcus Thompson',
      username: 'mthompson',
      message: "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
      profilePic: '../../../public/img/profile3.jpg'
    },
    {
      name: 'John Appleseed',
      username: 'johnaseed',
      message: "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
      profilePic: '../../../public/img/profile4.jpg'
    },
    {
      name: 'Igor Stravinsky',
      username: 'igorstrav',
      message: "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work.",
      profilePic: '../../../public/img/profile5.jpg'
    },
    {
      name: 'Oliver Neverloved',
      username: 'olivernever',
      message: "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
      profilePic: '../../../public/img/profile6.jpg'
    },
    {
      name: 'Jean Gray',
      username: 'jeniic',
      message: "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
      profilePic: '../../../public/img/profile7.jpg'
    },
    {
      name: 'Declan Rice',
      username: 'drice',
      message: "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
      profilePic: '../../../public/img/profile8.jpg'
    },
    {
      name: 'Mark Dennis',
      username: 'marked',
      message: "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable.",
      profilePic: '../../../public/img/profile9.jpg'
    }
];


   return(
    <div id='reviews' className = 'w-[85%] mt-[10%] flex items-center flex-col'>
    <p className = 'text-indigo-600 font-medium'>Testimonals</p>
    <h1 className = 'text-4xl my-3 font-semibold mb-5 text-center'>Countless users, countless smiles</h1>
        <p className = 'w-[65%] text-center text-xl text-gray-600'>Explore our community's journey and discover why satisfaction defines us.</p>
        <div className='columns-3 gap-10 mt-10 max-md:flex max-md:flex-col max-md:gap-0 max-lg:columns-2 '>
            {usersData.map(item=>{
                return(
                    <div className='mb-10 max-md:mb-4 break-inside-avoid p-5 flex flex-col border gap-2 items-start border-gray-300 rounded-md shadow-sm'>
                        <span className='flex items-center gap-3' >
                        <img src={item.profilePic} className='h-12 w-12 rounded-full'/>
                          <span className='flex flex-col gap-0'>
                              <p className='text-lg font-semibold '>{item.name}</p>
                              <p className=''>@{item.username}</p>
                          </span>
                        </span>
                        <p className='w-[95%]'>{item.message}</p>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default Users;

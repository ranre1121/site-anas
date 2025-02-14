import brushimg from './brush.svg'
import copyrightimg from './copyright.svg'
import cycleimg from './cycle.svg'
import downloadimg from './download.svg'
import refundimg from './refund.svg'
import teamimg from './team.svg'

const images = {
    download: downloadimg,
    brush: brushimg,
    copyright: copyrightimg,
    refund: refundimg,
    team: teamimg,
    cycle: cycleimg
  };

function Features (){
    const featuresData = [
        {
            download: [
                'Infinite Download',
                "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
            ]
        },
        {
            brush: [
                'Purely Handcrafted',
                'No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.'
            ]
        },
        {
            copyright: [
                'All Are Under Licensed',
                'The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).'
            ]
        },
        {
            refund: [
                'Cancel Anytime',
                "Subscribe at your own pace, and cancel when you feel it's enough."
            ]
        },
        {
            team: [
                'Empowering For Team',
                'We support multiple seats at once, requiring only a single payment.'
            ]
        },
        {
            cycle: [
                'No Limitations',
                'Use as many as you want, from Dribbble presentations to PowerPoint presentations.'
            ]
        }
    ];


    return(
        <div id='features' className = 'w-[85%] mt-[10%] flex items-center flex-col'>
        <p className = 'text-indigo-600 font-medium '>Premium abstract images</p>
        <h1 className = 'text-4xl my-3 font-semibold mb-5 text-center'>Easy access to top quality images</h1>
            <p className = 'w-[65%] text-center text-xl text-gray-600'>In a world where storytelling constantly evolves,
                we lead with groundbreaking images designed for your presentation excellence</p>
            <div className='flex flex-wrap max-lg:flex-col max-lg:items-center gap-20 justify-center mt-20'>
                {featuresData.map(item=>{
                    for(let key in item){
                        return(
                        <div className='flex w-[28%] max-lg:w-[90%] items-center flex-col'>
                            <div className='h-12 w-12 flex justify-center items-center mb-5 rounded-full shadow-md'>
                            <img className='h-8 w-8' src={images[key]}/>
                            </div>
                            <h1 className='text-xl font-semibold mb-2 text-center'>{item[key][0]}</h1>
                            <p className='text-center'>{item[key][1]}</p>
                        </div>)
                    }
                })}
            </div>
                
        </div>
    )
}

export default Features
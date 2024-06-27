import Itemcard from "./item"
import Carousel from "./Carousel";
function Content (){

const items = [
    {
        img:'https://www.jtrustbank.co.id/theme/Site/img/Banner_website_BukaTabunganTebarHadiah_jul_23.jpg',
        title:'Membuat Website Perbankan',
        date:'20-10-2024',text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolor?.',
        id:'static1',
        id1:'#static1'
    },
    {
        img:'https://delapanmedia.com/asset/berita/original/76318067767-aaa.jpg',
        title:'Membuat Website Sekolah',
        date:'21-10-2024',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolor?.',
        id:'static2',
        id1:'#static2'
    },
    {
        img:'https://lh3.googleusercontent.com/94axuxYbl_UEr8yKB-mzH_gxB5SSilmFdoS-OsMpbQwgpP3pfMA6neVOhxBsyy_zLi0DaXb6Gq0OnGi2Z_e2554BenAWy96mDmlylm2Bm6RbXEFkoKpqoCHM1Kv_0xFJ7ITDY6eCrV9kDjqdafXfl8xWT_ARFOQ7-_Qpz0h6wDcSy9z2H88xBcbIBEurvg',
        title:'Membuat Website Rumah Sakit',
        date:'22-10-2024',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolor?.',
        id:'static3',
        id1:'#static3'
    }
];
    return (
        <>
        <Carousel/>
        <div id="about" className="container-fluid bg-primary bg-gradient">
            <div className="row ">
                <div className="col">
                    <img src="https://img.freepik.com/premium-vector/happy-young-man-posing-flat-illustration_1062857-770.jpg" className="myphotos"  alt="saya Sndiri" width="450px" />
                </div>
                <div className="col mt-5">
                    <h1 className="title-job">Im Web Developer</h1>
                    <p className="text-description text-start"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad at tempore natus numquam modi quae, voluptatum qui, atque esse officiis magnam nemo optio illum doloremque dolorem deserunt! Sit, dolores cum.</p>
                    <a href="#project" className="btn btn-light">My project</a>
                </div>
            </div>
            <div id="project" className="row">
                <h1 className="text-center text-white"> My Project</h1>
                    {items.map((item,index) =>(
                        <Itemcard key={index} img={item.img} title={item.title} date={item.date} text={item.text} id={item.id} id1={item.id1}/>
                    ))}
            </div>
        </div>
        </>
    )
}
export default Content
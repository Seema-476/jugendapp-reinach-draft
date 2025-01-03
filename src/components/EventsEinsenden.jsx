import React, { useState } from 'react'
import Heading from '../common/Heading'
import swal from 'sweetalert'

const EventsEinsenden = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [formData, setFormData] = useState({
        category: "",
        title: "",
        date: "",
        location: "",
        price: "",
        details: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        swal({
            title: "Done",
            text: "Are you sure that you want to leave this page?",
            icon: "success",
            dangerMode: true,
        });
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
        setSelectedImages([...selectedImages, ...newImages]);
    };

    const triggerFileInput = () => {
        document.getElementById("imageInput").click();
    };
    return (
        <div className='bg-sky-blue lg:py-[60px] py-11'>
            <div className='container'>
                <Heading text="Event einsenden" />
                <p className='font-light sm:text-xl text-base sm:leading-custom-2xl text-gray text-center mx-auto max-w-[768px] py-5'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <form onSubmit={handleSubmit}>
                    <div className='bg-white rounded-[30px] p-4 max-w-[763px] mx-auto mb-5 border-light-blue border-[0.5px] border-dashed'>
                        <div className='w-24 h-24 flex items-center justify-center border-light-gray border border-dashed rounded-[20px]'>
                            {selectedImages.map((image, index) => (
                                <img key={index} className="rounded-[20px] max-w-[96px]" src={image} alt={`Selected Image ${index + 1}`} />))}
                            <button type="button" onClick={triggerFileInput}>
                                <img src="/assets/images/svg/plus-image.svg" alt="plus" />
                            </button>
                            <input id="imageInput" type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} multiple />
                        </div>
                    </div>
                        <div className="text-gray w-full max-w-[763px] mb-5 mx-auto flex py-[17.5px] px-4 rounded-[30px] bg-white placeholder:text-gray outline-none border-light-blue border-[0.5px]">
                            <select
                                type='text'
                                name="category"
                                placeholder='Kategorie'
                            required='required' 
                            value={formData.category} onChange={handleChange}
                            className="font-bold text-sm leading-custom-xl w-full placeholder:text-gray outline-none">
                            <option value="" disabled selected>Kategorie</option>
                            <option value="general">general</option>
                            <option value="SC">SC</option>
                            </select>
                        </div>
                    <div className='max-w-[763px] w-full flex max-sm:flex-col mx-auto sm:gap-5'>
                        <input
                            type="text"
                            name="title"
                            placeholder='Titel'
                            required='required'   
                            value={formData.title} onChange={handleChange}
                            className="font-bold text-sm leading-custom-xl text-gray mb-5 w-full mx-auto flex py-[17.5px] px-4 rounded-[30px] placeholder:text-gray outline-none border-light-blue border-[0.5px]"
                        />
                        <input
                            type="text"
                            name="date"
                            placeholder='Datum'
                            required='required' 
                            value={formData.date}
                            onChange={handleChange}
                            className="font-bold text-sm leading-custom-xl w-full text-gray mb-5 mx-auto flex py-[17.5px] px-4 rounded-[30px] placeholder:text-gray outline-none border-light-blue border-[0.5px]"
                        />
                    </div>
                    <div className='max-w-[763px] w-full flex max-sm:flex-col mx-auto sm:gap-5'>
                        <input
                            type="text"
                            name='location'
                            required='required' 
                            placeholder='Standort'
                            value={formData.location} onChange={handleChange}
                            className="font-bold text-sm leading-custom-xl text-gray mb-5 w-full mx-auto flex py-[17.5px] px-4 rounded-[30px] placeholder:text-gray outline-none border-light-blue border-[0.5px]"
                        />
                        <input
                            type="text"
                            name='price'
                            placeholder='Preis'
                            required='required' 
                            value={formData.price} onChange={handleChange}
                            className="font-bold text-sm leading-custom-xl w-full text-gray mb-5 mx-auto flex py-[17.5px] px-4 rounded-[30px] placeholder:text-gray outline-none border-light-blue border-[0.5px]"
                        />
                    </div>
                    <textarea
                        type="text"
                        placeholder="Details zur Veranstaltung" cols="30" rows="4"
                        name='details'
                        required='required' 
                        value={formData.details} onChange={handleChange}
                        className="font-bold text-sm leading-custom-xl w-full text-gray mb-5 mx-auto flex pt-[55.5px] px-4 rounded-[30px] max-w-[763px] placeholder:text-gray outline-none border-light-blue border-[0.5px] resize-none"></textarea>
                    <div className='mx-auto text-center'>
                        <button className='font-bold text-base text-white py-4 px-[115.5px] bg-gradient-to-tr from-[#0071BB] to-[#39A3E7] hover:from-[#39A3E7] hover:to-[#0071BB] duration-1000 rounded-[30px]'>Event einsenden</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EventsEinsenden
'use client'

const CourseForm = () => {
    return (
        <div className="mt-10 w-[792px]">
            <h3 className="text-[20px] font-semibold mb-6 text-[var(--text-black)]">Leave A Comment</h3>
            <p className="jost font-normal text-lg text-[var(--courseForm-text)]">Your email address will not be published. Required fields are marked *</p>
            <form className="space-y-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                        type="text" 
                        placeholder="Name*" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 jost font-normal text-lg text-[var(--courseForm-placeholder)]"
                    />
                    <input 
                        type="email" 
                        placeholder="Email*" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 jost font-normal text-lg text-[var(--courseForm-placeholder)]"
                    />
                </div>
                    <textarea 
                        placeholder="Comment" 
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 jost font-normal text-lg text-[var(--courseForm-placeholder)]"
                    ></textarea>
                <div className="flex items-center">
                    <input type="checkbox" id="save-info" className="mr-2" />
                    <label htmlFor="save-info" className="jost font-normal text-lg text-[var(--courseTabs-check)]">
                        Save my name, email in this browser for the next time I comment
                    </label>
                </div>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-400 transition-colors cursor-pointer">
                    Posts Comment
                </button>
            </form>
        </div>
    )
}

export default CourseForm
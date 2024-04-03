import Button from './Button';
import DelButton from './DelButton';
import Input from './Input';

function Popup({ title, isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="bg-white w-1/2 p-6 rounded shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <form>
                            <div>
                                <Input lable="First Name" placeholder="Enter your first name" />
                                <Input lable="Last Name" placeholder="Enter your last name" />
                                <Input lable="Email" type="email" placeholder="Enter your email" />
                                <Input lable="Phone" type="tel" placeholder="Enter your phone number" />
                                <Input lable="Birthday" type="date" />
                            </div>
                            <div className="flex justify-end mt-4">
                                <div className="mx-4">
                                    <DelButton title="Cancel" onClick={onClose} />
                                </div>
                                <Button type="submit" title="Finish" />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Popup;

const ScheduleCardWrapper = ({ bg,text, children }) => {
    return (
        <div
            className={`card flex space-evenly gap-4 flex-col ${bg} ${text} p-4 rounded`}
        >
            {children}
        </div>
    );
};
export default ScheduleCardWrapper;

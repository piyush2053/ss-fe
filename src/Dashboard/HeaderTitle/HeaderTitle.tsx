export default function HeaderTitle() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="flex flex-wrap">
      <p className="font-semibold text-3xl my-auto">{getGreeting()},</p>
      <p className="mx-3 my-auto">Piyush</p>
    </div>
  );
}

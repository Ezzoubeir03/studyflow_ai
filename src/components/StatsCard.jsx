export default function StatsCard({ title, value, subtitle}){
    return (
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:scale-105 transition-all">
            <h3 className="text-gray-400 text-sm">{title}</h3>
            <p className="text-2xl font-bold text-white mt-2">{value}</p>
            <span className="text-gray-500 text-sm">
                {subtitle}
            </span>
        </div>
    );
}
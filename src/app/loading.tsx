export default function Loading() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="animate-pulse space-y-8">
                    <div className="h-32 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
                    <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                        <div className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

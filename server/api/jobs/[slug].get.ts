import { JOBS_DUMMY } from "../../constants"
export default defineEventHandler((event) => {
    const slug = getRouterParam(event, 'slug')
    const job = JOBS_DUMMY.flatMap(category => category.jobs).find(job => job.jobSlug === slug);
        
    return job
})
import jobs from './db/jobs.json';
const getJobs = async (req, res) => {
  const { method } = req;

  if (method === 'POST') {
    try {
      const searchFilters = req.body.search || {};
      const itemFilters = req.body.filter || {};

      const filteredBySearch = jobs.filter((job) => {
        for (let sf in searchFilters) {
          if (job[sf] === undefined) {
            return false;
          } else if (
            !job[sf].toLowerCase().includes(searchFilters[sf].toLowerCase())
          ) {
            return false;
          }
        }
        return true;
      });

      const filteredByItemFilter = filteredBySearch
        .map((job) => {
          let items = [];

          if (Object.keys(itemFilters).length === 0) {
            items = job.items;
          } else {
            job.items.forEach((item) => {
              for (let it in itemFilters) {
                if (!itemFilters[it]) continue;
                if (item[it] === undefined) {
                  console.log('caught undefined', item[it]);
                } else if (item[it].includes(itemFilters[it])) {
                  items.push(item);
                  break;
                }
              }
            });
          }
          if (items.length === 0) return undefined;
          return { name: job.name, job_title: job.job_title, items };
        })
        .filter(Boolean);

      return res.status(200).json(filteredByItemFilter);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
};
export default getJobs;

/**
 * 
 * jobs=[];

itemFilters={job_type:'', department:'', work_schedule:'', experience:''}

searchFilters={name:'Mammoth', job_title:''}
const filteredSearch = jobs.filter((job) => {
  for(let sf in searchFilters){
    if(job[sf] === undefined){
      return false
    }else if(!job[sf].includes(searchFilters[sf])){
      return false
    }
  }
  return true
})



let filteredItems = filteredItems.map((job) => {

  let items = [];
  job.items.forEach(item => {
    for(let it in itemFilters){
      if(!itemFilters[it]) continue;
      if(item[it] === undefined){
        console.log('caught undefined', item[it])
      
      }else if(item[it].includes(itemFilters[it])){
        items.push(item)
        break;
      }
    }
  });
  if(items.length === 0) return undefined
  return {name:job.name, job_title:job.job_title, items};

  
}).filter(Boolean)
 */

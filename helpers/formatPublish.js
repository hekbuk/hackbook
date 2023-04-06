const formatedPublish = (createdAt) => {
    let created = createdAt.getTime() / 1000
    let now = new Date().getTime() / 1000
    let sec = now - created
    let published = Math.floor(sec / 60)

    if (published > 60){
      published = Math.floor(published / 60) + ' hours ago'
    }else {
      published += ' minutes ago'
    }
     
    return published
  }

module.exports = {formatedPublish}

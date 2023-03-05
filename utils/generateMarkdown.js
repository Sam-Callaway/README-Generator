// function to generate markdown for README
function generateMarkdown(data) {
  let output = `# ${data.Title}`

  if (data.Description === ""){}else{output = output.concat(`\n\n# Description\n\n${data.Description}`)}
  let contents = `\n\n## Table of Contents`
  for (property in data){
    if(property === "Email" || property === "GitHub" || property === "Title" || property === "Description"){}else{
      if(data[property] === ""){}else{
      contents = contents.concat(`\n\n[${property}](#${property.replace(" ","-").toLowerCase()})`)}
    }
  }

  if(data.GitHub === "" && data.Email === ""){}
  else{contents = contents.concat(`\n\n[Questions](#questions)`)}

  output = output.concat(contents)

  for (property in data){
    if(property === "Email" || property === "GitHub" || property === "Title" || property === "Description"){}else{
      if(data[property] === ""){}
      else
      {
        output = output.concat(`\n\n## ${property}\n\n${data[property]}`)
      }}}

  if(data.GitHub === "" && data.Email === ""){}
  else{
    output = output.concat(`\n\n## Questions
    \nIf you have any questions, please contact me at the below:`)
    if(data.GitHub === ""){}else{output = output.concat(`\nhttps://github.com/${data.GitHub}`)}
    if(data.Email === ""){}else{output = output.concat(`\n${data.Email}`)}
  }
  
  return output;}


module.exports = generateMarkdown;

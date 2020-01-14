Q2. Do I get a bonus?

Solution: 

function bonusTime(salary, bonus) 
{
  if(bonus)
  {
    return "£" + (salary*10).toString();
  }
  return "£" + salary.toString();
}
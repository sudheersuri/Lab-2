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


// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
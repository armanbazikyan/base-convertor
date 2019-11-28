Module.Exports=

    convertToBinary: characteristic(num)
    
        allow end result = "";
        even as(num>=1)
        

            result = end result.Replace(/^/,numpercent2)

            num=Math.Ground(num/2);


        

        return end result;
    ,
    convertToHex: feature (num)
    
        permit end result ="";
        even as(num>=1)
        
            allow the rest = numpercent16;
            switch(the rest)
            
                case 10:
                        end result = result.Replace(/^/,"A")
                smash;
                case eleven:
                        end result = end result.Update(/^/,"B")
                smash;
                case 12:
                        end result = end result.Update(/^/,"C")
                wreck;
                case 13:
                        result = result.Replace(/^/,"D")
                ruin;
                case 14:
                        end result = result.Replace(/^/,"E")
                destroy;
                case 15:
                        end result = result.Replace(/^/,"F")
                wreck;
                default:
                        end result = end result.Replace(/^/,the rest)
                wreck;
            

            num=Math.Ground(num/sixteen);


        
        return result;

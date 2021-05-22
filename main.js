var i = 0;
function update()

{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
    {
        i=0;
    }


        var upatedImage = images[i];
        var upatedName = names[i];
        document.getElementById("family_member_image").src = upatedImage;
        document.getElementById("fmaily_member_name").innerHTML = upatedName;
        


  


}
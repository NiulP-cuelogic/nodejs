module.exports = function(name,email)
{
    this.email= email;
    this.name = name;

    this.fullname = function()
    {
        return this.name + ":" + this.email;
    }
}   
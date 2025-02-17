from django.contrib import admin

# import the model Login
from .models import Login
 
# create a class for the admin-model integration
class LoginAdmin(admin.ModelAdmin):
 
    # add the fields of the model here
    list_display = ("email","password")
 
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Login,LoginAdmin)

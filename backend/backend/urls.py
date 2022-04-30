"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from api.v1.sign.Sign import SignIn
from knox import views as KnoxViews

from api.v1.business.Business import BusinessAPI
from api.v1.account.Account import AccountAPI
from api.v1.mark.Mark import MarkAPI

urlpatterns = [
    #ADMIN
    path('admin/', admin.site.urls),                                # GET

    # SIGNIN
    path('api/v1/signin/', SignIn.as_view()),                       # POST 

    # SIGNOUT
    path('api/v1/signout/', KnoxViews.LogoutView.as_view()),        # POST                     
    path('api/v1/signout/all/', KnoxViews.LogoutAllView.as_view()), # POST

    # ACCOUNT
    path('api/v1/account/', AccountAPI.as_view()),                  # POST, PUT, DELETE

    # BUSINESS
    path('api/v1/business/<int:pk>/', BusinessAPI.as_view()),       # GET

    # MARK
    path('api/v1/mark/', MarkAPI.as_view()),                        # POST
]   

urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL,  document_root = settings.MEDIA_ROOT)
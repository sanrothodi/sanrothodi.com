from django.core.mail import send_mail


def contact(request):
    if request.method == "POST":
        message_name = request.POST['message-name']
        message_email = request.POST['message-email']
        message = request.POST['message']

        #send and email

        send_mail(
            '' + message_name, # subject
            message, # message
            message_email, # from email
            ['sanro.thodi@gmail.com'], # to email
            )

        return render(request, 'contact.html', {message_name})

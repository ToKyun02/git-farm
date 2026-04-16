def save_github_id(backend, user, response, *args, **kwargs):
    if backend.name == 'github' and response.get('id'):
        user.github_id = response['id']
        user.save(update_fields=['github_id'])
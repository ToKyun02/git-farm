def save_github_data(backend, user, response, *args, **kwargs):

    if backend.name == 'github':
        user.github_id = response.get('id')
        user.github_access_token = response.get('access_token')
        user.avatar_url = response.get('avatar_url', '')
        user.save(update_fields=['github_id', 'github_access_token', 'avatar_url'])
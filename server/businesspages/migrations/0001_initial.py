# Generated by Django 4.0.3 on 2022-03-21 11:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BusinessPage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(default='', max_length=200)),
                ('name', models.CharField(default='', max_length=100)),
                ('username', models.CharField(default='', max_length=100, unique=True)),
                ('email', models.CharField(default='', max_length=100)),
                ('linkedIn', models.CharField(default='', max_length=100)),
                ('twitter', models.CharField(default='', max_length=100)),
                ('website', models.CharField(default='', max_length=100)),
                ('followers', models.ManyToManyField(related_name='followers', to='users.profile')),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owner', to='users.profile')),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag', models.CharField(default='', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=250)),
                ('body', models.TextField(default='')),
                ('businesspage', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='businesspages.businesspage')),
                ('likes', models.ManyToManyField(related_name='likes', to='users.profile')),
            ],
        ),
        migrations.AddField(
            model_name='businesspage',
            name='tags',
            field=models.ManyToManyField(related_name='tags', to='businesspages.tag'),
        ),
    ]

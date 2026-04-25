#command #terminal 
[[Linux Commands MOC]]
- - -

The `crontab` command views all scheduled tasks.

# Usage

`crontab`

```shell
$ crontab
```

## Editing Crontab

Each `crontab` entry must follow `Minute Hour DayOfMonth Month DayOfWeek Command`. The `*` specifies every time, commas separate a list, and a `-` specifies a range.

This appends `date` command output to `test` file every 31 and 59 minute of every hour, day, month, and week.
```
31,59 * * * * /bin/date >> /home/user/test
```
## Important Flags

- `-l`: All tasks for user
- `-e`: Edits crontab
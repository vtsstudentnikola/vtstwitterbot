
  class CurrentTime {

        constructor(data) {
            this.week_number = data.week_number;
            this.utc_offset = data.utc_offset;
            this.utc_datetime = data.utc_datetime;
            this.unixtime = data.unixtime;
            this.timezone = data.timezone;
            this.raw_offset = data.raw_offset;
            this.dst_until = data.dst_until;
            this.dst_offset = data.dst_offset;
            this.dst_from = data.dst_from;
            this.dst = data.dst;
            this.day_of_year = data.day_of_year;        
            this.day_of_week = data.day_of_week;
            this.datetime = data.datetime
            this.abbreviation = data.abbreviation;
        }
    }
    module.exports = CurrentTime;